import { useGetSummonerRankedChampStatsQuery } from "../../../hooks/useGetSummonerRankedChampStatsQuery";
import { StyledSummonerChampStatsCard } from "./SummonerChampStatsCard.styled";
import { useParams } from "react-router-dom";
import { IndividualChampStatsCard } from "../IndividualChampStatsCard/IndividualChampStatsCard";
import { Span } from "../../atoms/Span/Span";
import { CustomLink } from "components/atoms/CustomLink/CustomLink";

export const SummonerChampStatsCard = () => {


  const { server, summonerName } = useParams();
  const { data: championRankedStatsData, isLoading } = useGetSummonerRankedChampStatsQuery(server, summonerName);

  if (isLoading) return <div style={{ color: "white" }}>LOADING...</div>;

  return (
    <StyledSummonerChampStatsCard>
      <CustomLink to="stats">Champion stats</CustomLink>
      {championRankedStatsData.slice(0, 5).map((champion, i) => <IndividualChampStatsCard key={i} champion={champion} />)}
    </StyledSummonerChampStatsCard>
  );
};
