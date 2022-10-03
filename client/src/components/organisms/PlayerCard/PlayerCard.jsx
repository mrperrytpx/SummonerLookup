import { StyledPlayerCard } from "./PlayerCard.styled";
import { SummonerIcon } from "../../molecules/SummonerIcon/SummonerIcon";
import { SummonerInfo } from "../../molecules/SummonerInfo/SummonerInfo";

export const PlayerCard = ({ playerData, playerChallengesData }) => {

  return (
    <StyledPlayerCard>
      <SummonerIcon />
      <SummonerInfo playerData={playerData} playerChallengesData={playerChallengesData} />
    </StyledPlayerCard>
  );
};
