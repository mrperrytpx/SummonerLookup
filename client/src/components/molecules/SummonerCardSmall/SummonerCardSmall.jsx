import { StyledSummonerCardSmall } from "./SummonerCardSmall.styled";
import { SERVER_VALUES } from "../../../consts/serverValues";
import { Link } from "react-router-dom";
import { useUnfollowSummonerMutation } from "../../../hooks/useUnfollowSummonerMutation";
import { Button } from "../../atoms/Button/Button";
import { ImCross } from "react-icons/im";
import { FlexRowCenter } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const SummonerCardSmall = ({ summoner }) => {

  const unfollowSummoner = useUnfollowSummonerMutation();

  const handleUnfollow = async (e) => {
    e.preventDefault();
    await unfollowSummoner.mutateAsync({ id: summoner.summonerId });
  };

  return (
    <StyledSummonerCardSmall>

      <Link to={`/${summoner.server}/${summoner.summonerName}`}>
        <div>{summoner?.summonerName} - {SERVER_VALUES[summoner?.server]}</div>
      </Link>

      <Button variant="danger" type="button" wide={false} onClick={(e) => handleUnfollow(e)}>
        <FlexRowCenter>
          <ImCross color="white" />
        </FlexRowCenter>
      </Button>

    </StyledSummonerCardSmall>
  );
};
