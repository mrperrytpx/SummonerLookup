import { useGetSummonerRankedChampStatsQuery } from "../../../hooks/useGetSummonerRankedChampStatsQuery";
import { StyledSummonerChampStatsCard } from "./SummonerChampStatsCard.styled";
import { useParams } from "react-router-dom";
import { IndividualChampStatsCard } from "../IndividualChampStatsCard/IndividualChampStatsCard";
import { Span } from "../../atoms/Span/Span";

export const SummonerChampStatsCard = () => {


  const { server, summonerName } = useParams();
  const { data: championRankedStatsData, isLoading } = useGetSummonerRankedChampStatsQuery(server, summonerName);

  if (isLoading) return <div style={{ color: "white" }}>LOADING...</div>;

  return (
    <StyledSummonerChampStatsCard>
      <Span size="m" align="left" block={true}>Champion stats</Span>

      {championRankedStatsData.slice(0, 5).map((champion, i) => <IndividualChampStatsCard key={i} champion={champion} />)}
    </StyledSummonerChampStatsCard>
  );
};
