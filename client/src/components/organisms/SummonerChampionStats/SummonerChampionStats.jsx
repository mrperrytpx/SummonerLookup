import { useGetSummonerRankedChampStatsQuery } from "hooks/useGetSummonerRankedChampStatsQuery";
import { useParams } from "react-router-dom";
import { StyledSummonerChampionStats } from "./SummonerChampionStats.styled";
import { Span } from "components/atoms/Span/Span";
import { useState } from "react";
import { FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { StatsTable } from "components/molecules/StatsTable/StatsTable";
import { useTable } from "hooks/useTable";

export const SummonerChampionStats = () => {

  const { server, summonerName } = useParams();
  const { data: championRankedStatsData, isLoading } = useGetSummonerRankedChampStatsQuery(server, summonerName);

  const [stats, setStats] = useState("solo");

  if (isLoading) return <Span size="xl">Loading...</Span>;

  return (
    <StyledSummonerChampionStats>
      <FlexRowStart>
        <select defaultValue={stats} name="queue" id="queue" onChange={(e) => setStats(e.target.value)}>
          <option value="solo">Ranked Solo</option>
          <option value="flex">Ranked Flex</option>
          <option value="combined">Combined</option>
        </select>
      </FlexRowStart>
      {championRankedStatsData?.[stats] && <StatsTable data={championRankedStatsData?.[stats]} />}
    </StyledSummonerChampionStats>
  );
};
