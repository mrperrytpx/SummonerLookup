import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Span } from "../../atoms/Span/Span";
import { StyledSummonerInfo } from "./SummonerInfo.styled";
import { Button } from "../../atoms/Button/Button";
import { CHALLENGE_THRESHOLDS } from "../../../consts/challengeThresholds";
import { useUnfollowSummonerMutation } from "../../../hooks/useUnfollowSummonerMutation";
import { useFollowSummonerMutation } from "../../../hooks/useFollowSummonerMutation";
import { useGetFollowingQuery } from "../../../hooks/useGetFollowingQuery";
import { useAuth } from "../../../hooks/useAuth";
import { useGetSummonerQuery } from "../../../hooks/useGetSummonerQuery";
import { useGetSummonerChallengesQuery } from "../../../hooks/useGetSummonerChallengesQuery";
import { FlexCol, FlexColCenter, FlexRow, FlexRowCenter, FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";

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
    const payload = {
      summonerName: summonerData?.summonerName,
      region: summonerData?.region,
      server: summonerData?.server,
      puuid: summonerData?.puuid,
      summonerId: summonerData?.summonerId
    };
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

    const titleData = leagueChallengesData?.find(challenge => challenge.id === summonerTitleId);
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

  const alreadyFollowing = userData?.some(summoner => summoner.summonerId === summonerData.summonerId);

  return (
    <StyledSummonerInfo>
      <FlexRow gap=".5rem">
        <Span align="left" size="xxl">{summonerData?.summonerName}</Span>
        {summonerChallengesData?.preferences?.title?.length > 2
          ?
          <>
            <FlexRow>
              <Span size="xxl" align="left">-</Span>
            </FlexRow>
            <FlexRow>

              <Span size="xxl" align="left"><em>{summonerTitle()}</em></Span>
            </FlexRow>
          </>
          : null
        }
      </FlexRow>

      <FlexRowCenter>
        <Span
          align="center"
          size="s"
        >
          {summonerChallengesData?.totalPoints?.current} out of {summonerChallengesData?.totalPoints?.max} challenge points earned
        </Span>
      </FlexRowCenter>

      <Button
        disabled={!accessToken}
        type="button"
        variant={alreadyFollowing ? "danger" : "active"}
        onClick={(e) => alreadyFollowing ? handleUnfollow(e) : handleFollow(e)}
      >{alreadyFollowing ? "UNFOLLOW" : "FOLLOW"}</Button>
    </StyledSummonerInfo >
  );
};


