import { StyledSummonerCardSmall } from "./SummonerCardSmall.styled";
import { SERVER_VALUES } from "../../../consts/serverValues";
import { useUnfollowSummonerMutation } from "../../../hooks/useUnfollowSummonerMutation";
import { Button } from "../../atoms/Button/Button";
import { ImCross } from "react-icons/im";
import { FlexRowCenter, FlexRowSpaceBetween } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const SummonerCardSmall = ({ summoner }) => {

  const unfollowSummoner = useUnfollowSummonerMutation();

  const handleUnfollow = async (e) => {
    e.preventDefault();
    await unfollowSummoner.mutateAsync({ id: summoner.summonerId });
  };

  return (
    <StyledSummonerCardSmall to={`/${summoner.server}/${summoner.summonerName}`}>

      <FlexRowSpaceBetween gap="1rem">

        <div>{summoner?.summonerName} - {SERVER_VALUES[summoner?.server]}</div>

        <Button variant="danger" type="button" wide={false} padding={"0.5rem"} onClick={(e) => handleUnfollow(e)}>
          <FlexRowCenter>
            <ImCross color="white" />
          </FlexRowCenter>
        </Button>
      </FlexRowSpaceBetween>

    </StyledSummonerCardSmall>
  );
};
