import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useGetSummonerMatchesQuery } from "hooks/useGetSummonerMatchesQuery";
import { StyledSummonerMatches } from "./SummonerMatches.styled";
import { useParams } from "react-router-dom";
import { SummonerMatchCard } from "components/molecules/SummonerMatchCard/SummonerMatchCard";

export const SummonerMatches = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: summonerMatchesData, isLoading } = useGetSummonerMatchesQuery(server, summonerData?.puuid);

  if (isLoading) return <div style={{ color: "white" }}>Loading...</div>;

  return (
    <StyledSummonerMatches>
      {summonerMatchesData.map((match) => <SummonerMatchCard key={match?.value?.info?.gameId} match={match?.value} />)}
    </StyledSummonerMatches>
  );
};
