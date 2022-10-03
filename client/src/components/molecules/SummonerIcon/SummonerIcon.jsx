import { StyledSummonerIcon } from "./SummonerIcon.styled";
import { useGetPlayerQuery } from "../../../hooks/useGetPlayerQuery";
import { useGetLeagueVersion } from "../../../hooks/useGetLeagueVersion";
import { useParams } from "react-router-dom";

export const SummonerIcon = () => {

  const { server, summonerName } = useParams();
  const { data: playerData } = useGetPlayerQuery(server, summonerName);
  const { data: version } = useGetLeagueVersion();

  return (
    <StyledSummonerIcon>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${playerData?.profileIconId}.png`}
        alt="Personal summoner icon"
      />
      <span>{playerData?.summonerLevel}</span>
    </StyledSummonerIcon>
  );
};
