import { StyledSummonerCard } from "./SummonerCard.styled";
import { IconWithLevel } from "../../atoms/IconWithLevel/IconWithLevel";
import { SummonerInfo } from "../../molecules/SummonerInfo/SummonerInfo";
import { useQueryClient } from "react-query";

export const SummonerCard = ({ summonerData, summonerChallengesData }) => {

  const queryClient = useQueryClient();
  const version = queryClient.getQueryData(["version"]);

  return (
    <StyledSummonerCard>
      <IconWithLevel
        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${summonerData?.profileIconId}.png`}
        level={summonerData?.summonerLevel}
        width={140}
        alt="Account icon"
      />
      <SummonerInfo summonerData={summonerData} summonerChallengesData={summonerChallengesData} />
    </StyledSummonerCard>
  );
};
