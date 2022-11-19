import { useGetSummonerRankedChampStatsQuery } from "../../../hooks/useGetSummonerRankedChampStatsQuery";
import { StyledSummonerChampStatsCard } from "./SummonerChampStatsCard.styled";
import { useParams } from "react-router-dom";
import { IndividualChampStatsCard } from "../IndividualChampStatsCard/IndividualChampStatsCard";
import { CustomLink } from "components/atoms/CustomLink/CustomLink";
import { useState } from "react";
import { FlexColCenter, FlexRowSpaceBetween } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { Dropdown } from "components/atoms/Dropdown/Dropdown";

export const SummonerChampStatsCard = () => {

  const [stats, setStats] = useState("solo");

  const { server, summonerName } = useParams();
  const { data: championRankedStatsData, isLoading } = useGetSummonerRankedChampStatsQuery(server, summonerName);

  const handleClick = (value) => setStats(value);

  const options = [
    {
      stateValue: "solo",
      text: "Ranked Solo"
    },
    {
      stateValue: "flex",
      text: "Ranked Flex"
    }
  ];

  if (isLoading) return <div style={{ color: "white" }}>LOADING...</div>;

  return (
    <StyledSummonerChampStatsCard>
      <FlexRowSpaceBetween>
        <CustomLink max="200px" to="stats">Champion stats</CustomLink>
        <Dropdown
          handleClick={handleClick}
          from="right"
          state={stats}
          setState={setStats}
          id="queue"
          options={options}
        />
      </FlexRowSpaceBetween>

      <FlexColCenter>
        {championRankedStatsData?.[stats].slice(0, 5).map((champion, i) => <IndividualChampStatsCard data-order={i} key={i} champion={champion} />)}
      </FlexColCenter>
    </StyledSummonerChampStatsCard>
  );
};
