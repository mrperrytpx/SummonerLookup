import { StyledSummonerCard } from "./SummonerCard.styled";
import { SummonerIcon } from "../../molecules/SummonerIcon/SummonerIcon";
import { SummonerInfo } from "../../molecules/SummonerInfo/SummonerInfo";

export const SummonerCard = ({ summonerData, summonerChallengesData }) => {

  return (
    <StyledSummonerCard>
      <SummonerIcon />
      <SummonerInfo summonerData={summonerData} summonerChallengesData={summonerChallengesData} />
    </StyledSummonerCard>
  );
};
