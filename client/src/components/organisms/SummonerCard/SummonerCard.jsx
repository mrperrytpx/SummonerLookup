import { StyledSummonerCard } from "./SummonerCard.styled";
import { IconWithLevel } from "../../atoms/IconWithLevel/IconWithLevel";
import { SummonerInfo } from "../../molecules/SummonerInfo/SummonerInfo";

export const SummonerCard = ({ summonerData, summonerChallengesData }) => {

  return (
    <StyledSummonerCard>
      <IconWithLevel
        border
        radius="10px"
        // https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon5336.png
        src={`https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon${summonerData?.profileIconId}.png`}
        level={summonerData?.summonerLevel}
        width="140px"
        alt="Account icon"
      />
      <SummonerInfo summonerData={summonerData} summonerChallengesData={summonerChallengesData} />
    </StyledSummonerCard>
  );
};
