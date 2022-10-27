import { useGetSummonerRankedChampStatsQuery } from "../../../hooks/useGetSummonerRankedChampStatsQuery";
import { StyledSummonerChampStatsCard } from "./SummonerChampStatsCard.styled";
import { useParams } from "react-router-dom";
import { IndividualChampStatsCard } from "../IndividualChampStatsCard/IndividualChampStatsCard";
import { Span } from "../../atoms/Span/Span";
import { CustomLink } from "components/atoms/CustomLink/CustomLink";
import { useState } from "react";
import { FlexRow, FlexRowSpaceBetween } from "components/atoms/FlexBoxes/FlexBoxes.styled";

export const SummonerChampStatsCard = () => {

  const [stats, setStats] = useState("solo");

  const { server, summonerName } = useParams();
  const { data: championRankedStatsData, isLoading } = useGetSummonerRankedChampStatsQuery(server, summonerName);

  if (isLoading) return <div style={{ color: "white" }}>LOADING...</div>;

  return (
    <StyledSummonerChampStatsCard>
      <FlexRowSpaceBetween>
        <CustomLink to="stats">Champion stats - {stats}</CustomLink>
        <select defaultValue={stats} name="queue" id="queue" onChange={(e) => setStats(e.target.value)}>
          <option value="solo">Ranked Solo</option>
          <option value="flex">Ranked Flex</option>
          <option value="combined">Combined</option>
        </select>
      </FlexRowSpaceBetween>

      {championRankedStatsData?.[stats].slice(0, 5).map((champion, i) => <IndividualChampStatsCard key={i} champion={champion} />)}
    </StyledSummonerChampStatsCard>
  );
};
