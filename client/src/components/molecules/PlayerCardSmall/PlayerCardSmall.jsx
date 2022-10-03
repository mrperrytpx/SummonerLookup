import { StyledPlayerCardSmall } from "./PlayerCardSmall.styled";
import { SERVER_VALUES } from "../../../consts/serverValues";
import { Link } from "react-router-dom";
import { useUnfollowSummonerMutation } from "../../../hooks/useUnfollowSummonerMutation";
import { Button } from "../../atoms/Button/Button";
import { ImCross } from "react-icons/im";
import { FlexRowCenter } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const PlayerCardSmall = ({ player }) => {

  const unfollowSummoner = useUnfollowSummonerMutation();

  const handleUnfollow = async (e) => {
    e.preventDefault();
    await unfollowSummoner.mutateAsync({ id: player._id });
  };

  return (
    <StyledPlayerCardSmall>

      <Link to={`/${player.server}/${player.summonerName}`}>
        <div>{player?.summonerName} - {SERVER_VALUES[player?.server]}</div>
      </Link>

      <Button variant="danger" type="button" wide={false} onClick={(e) => handleUnfollow(e)}>
        <FlexRowCenter>
          <ImCross color="white" />
        </FlexRowCenter>
      </Button>

    </StyledPlayerCardSmall>
  );
};
