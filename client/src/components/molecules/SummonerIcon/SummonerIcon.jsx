import { StyledSummonerIcon } from "./SummonerIcon.styled";
import { useGetSummonerQuery } from "../../../hooks/useGetSummonerQuery";
import { useGetLeagueVersion } from "../../../hooks/useGetLeagueVersion";
import { useParams } from "react-router-dom";

export const SummonerIcon = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: version } = useGetLeagueVersion();

  return (
    <StyledSummonerIcon>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${summonerData?.profileIconId}.png`}
        alt="Personal summoner icon"
      />
      <span>{summonerData?.summonerLevel}</span>
    </StyledSummonerIcon>
  );
};
