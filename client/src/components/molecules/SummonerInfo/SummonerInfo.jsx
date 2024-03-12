import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { StyledSummonerInfo } from "./SummonerInfo.styled";
import { Button } from "../../atoms/Button/Button";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { FlexCol, FlexRow, FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { Span } from "../../atoms/Span/Span";
import { ChallengeTooltip } from "../ChallengeTooltip/ChallengeTooltip";
import { ErrorBoundary } from "utils/ErrorBoundry";
import { SERVER_VALUES } from "consts/serverValues";
import { CHALLENGE_THRESHOLDS } from "../../../consts/challengeThresholds";
import { useAuth } from "../../../hooks/useAuth";
import { useFollowSummonerMutation } from "../../../hooks/useFollowSummonerMutation";
import { useGetSummonerQuery } from "../../../hooks/useGetSummonerQuery";
import { useGetFollowingQuery } from "../../../hooks/useGetFollowingQuery";
import { useGetSummonerChallengesQuery } from "../../../hooks/useGetSummonerChallengesQuery";
import { useUnfollowSummonerMutation } from "../../../hooks/useUnfollowSummonerMutation";

export const SummonerInfo = () => {
    const queryClient = useQueryClient();
    const { server, summonerName } = useParams();
    const { data: summonerData } = useGetSummonerQuery(server, summonerName);
    const { data: summonerChallengesData } = useGetSummonerChallengesQuery(server, summonerName, summonerData?.puuid);

    const leagueChallengesData = queryClient.getQueryData(["challenges"]);

    const { accessToken } = useAuth();
    const { data: userData } = useGetFollowingQuery();
    const unfollowSummoner = useUnfollowSummonerMutation();
    const followSummoner = useFollowSummonerMutation();

    const handleFollow = async (e) => {
        e.preventDefault();
        const payload = { ...summonerData };
        await followSummoner.mutateAsync({ payload });
        queryClient.invalidateQueries(["me"]);
    };

    const handleUnfollow = async (e) => {
        e.preventDefault();
        await unfollowSummoner.mutateAsync({ id: summonerData.summonerId });
        queryClient.invalidateQueries(["me"]);
    };

    const summonerTitle = () => {
        const summonerTitleId = +summonerChallengesData?.preferences.title.slice(0, -2);
        // titleId converted to a number excluding last 2 digits
        const summonerTitleInObject = +summonerChallengesData?.preferences.title.slice(-1);
        // last digit in titleId which determines which object's child (in order) it is that has the actual title string

        const titleData = leagueChallengesData?.find((challenge) => challenge.id === summonerTitleId);
        // find challenge data with shortened titleId
        const titleKey = CHALLENGE_THRESHOLDS[summonerTitleInObject];

        if (!titleKey) return;
        // gets which key in 'thresholds' object has the actual title string
        // example: CHALLENGE_THRESHOLDS[2] returns "SILVER" which would have .rewards[0].title in it because summonerTitleId ends with a '2'
        // why doesn't the API separate the ID itself or why doesn't it just return the title string instead of the ID
        // boggles my mind greatly

        const correctTitle = titleData?.thresholds[`${titleKey}`].rewards[0].title;
        return correctTitle;
    };

    const profileBadges =
        summonerChallengesData?.preferences?.challengeIds
            ?.map((id) => {
                return summonerChallengesData?.challenges.find((challenge) => challenge.challengeId === id);
            })
            .filter((x) => x !== undefined) || [];

    const alreadyFollowing = userData?.some((summoner) => summoner.summonerId === summonerData.summonerId);

    return (
        <StyledSummonerInfo>
            <FlexRow gap=".5rem">
                <Span align="left" size="xxl">
                    {summonerData?.name}#{summonerData.tagLine}
                </Span>
                {summonerChallengesData?.preferences?.title?.length > 2 ? (
                    <FlexRowStart gap="0.5rem">
                        <Span size="xs" align="left">
                            -
                        </Span>
                        <Span size="xl" align="left">
                            <em>{summonerTitle()}</em>
                        </Span>
                    </FlexRowStart>
                ) : null}
            </FlexRow>

            <FlexRowStart gap="1rem">
                <FlexCol>
                    <Span align="center" size="s">
                        {summonerChallengesData?.totalPoints?.current} out of {summonerChallengesData?.totalPoints?.max}{" "}
                        challenge points earned
                    </Span>
                    {summonerChallengesData?.totalPoints?.hasOwnProperty("position") ? (
                        <Span align="left" size="s">
                            Rank #{summonerChallengesData?.totalPoints?.position} {SERVER_VALUES[server]}
                        </Span>
                    ) : summonerChallengesData?.totalPoints?.hasOwnProperty("percentile") ? (
                        <Span align="left" size="s">
                            (better than{" "}
                            {Math.round((1 - summonerChallengesData?.totalPoints?.percentile) * 10000) / 100}% of{" "}
                            {SERVER_VALUES[server]})
                        </Span>
                    ) : null}
                </FlexCol>

                <FlexRowStart gap="0.5rem">
                    {profileBadges.length
                        ? profileBadges.map((badge) => (
                              <ImageContainer
                                  key={badge.challengeId}
                                  src={`https://ddragon.leagueoflegends.com/cdn/img/challenges-images/${badge?.challengeId}-${badge?.level}.png`}
                                  alt="Challenge"
                                  width="40px"
                              >
                                  <ErrorBoundary absolute={true}>
                                      <ChallengeTooltip badge={badge} />
                                  </ErrorBoundary>
                              </ImageContainer>
                          ))
                        : null}
                </FlexRowStart>
            </FlexRowStart>

            <Button
                width="135px"
                disabled={!accessToken}
                type="button"
                variant={alreadyFollowing ? "danger" : "active"}
                onClick={(e) => (alreadyFollowing ? handleUnfollow(e) : handleFollow(e))}
            >
                {alreadyFollowing ? "UNFOLLOW" : "FOLLOW"}
            </Button>
        </StyledSummonerInfo>
    );
};
