import { useGetSummonerRankedChampStatsQuery } from "hooks/useGetSummonerRankedChampStatsQuery";
import { useParams } from "react-router-dom";
import { StyledSummonerChampionStats } from "./SummonerChampionStats.styled";
import { Span } from "components/atoms/Span/Span";
import { useState } from "react";
import { FlexRowSpaceBetween } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { StatsTable } from "components/molecules/StatsTable/StatsTable";
import { Dropdown } from "components/atoms/Dropdown/Dropdown";

export const SummonerChampionStats = () => {

  const { server, summonerName } = useParams();
  const { data: championRankedStatsData, isLoading } = useGetSummonerRankedChampStatsQuery(server, summonerName);
  const [stats, setStats] = useState("combined");

  const handleClick = (value) => setStats(value);

  const options = [
    {
      stateValue: "solo",
      text: "Ranked Solo"
    },
    {
      stateValue: "flex",
      text: "Ranked Flex"
    },
    {
      stateValue: "combined",
      text: "Combined"
    }
  ];

  if (isLoading) return <Span size="xl">Loading...</Span>;

  return (
    <StyledSummonerChampionStats>
      <FlexRowSpaceBetween>
        <Dropdown
          from={"left"}
          state={stats}
          handleClick={handleClick}
          options={options}
        />
        <Span width="auto" size="s">Data pulled from <a rel="noreferrer" target="_blank" href="https://u.gg">U.gg</a></Span>
      </FlexRowSpaceBetween>
      <div className="border">
        {championRankedStatsData?.[stats] && <StatsTable data={championRankedStatsData?.[stats]} />}
      </div>
    </StyledSummonerChampionStats>
  );
};
