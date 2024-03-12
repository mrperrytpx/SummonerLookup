import { ImCross } from "react-icons/im";
import { queryClient } from "contexts/AppProviders";
import { StyledSummonerCardSmall } from "./SummonerCardSmall.styled";
import { Button } from "../../atoms/Button/Button";
import { FlexRowCenter, FlexRowSpaceBetween } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { SERVER_VALUES } from "../../../consts/serverValues";
import { useUnfollowSummonerMutation } from "../../../hooks/useUnfollowSummonerMutation";

export const SummonerCardSmall = ({ summoner }) => {
    const unfollowSummoner = useUnfollowSummonerMutation();

    queryClient.setQueryData(["summoner", summoner.server, summoner.name.toLowerCase()], summoner);

    const handleUnfollow = async (e) => {
        e.preventDefault();
        await unfollowSummoner.mutateAsync({ id: summoner.summonerId });
    };

    return (
        <StyledSummonerCardSmall to={`/${summoner.server}/${summoner.name}-${summoner.tagLine}`}>
            <FlexRowSpaceBetween gap="1rem">
                <div>
                    {summoner?.name}#{summoner.tagLine} - {SERVER_VALUES[summoner?.server]}
                </div>
                <Button variant="danger" type="button" padding="0.5rem" onClick={(e) => handleUnfollow(e)}>
                    <FlexRowCenter>
                        <ImCross color="white" />
                    </FlexRowCenter>
                </Button>
            </FlexRowSpaceBetween>
        </StyledSummonerCardSmall>
    );
};
