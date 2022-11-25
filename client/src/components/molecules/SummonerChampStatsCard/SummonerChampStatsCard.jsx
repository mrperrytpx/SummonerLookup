import { useState } from "react";
import { useParams } from "react-router-dom";
import { StyledSummonerChampStatsCard } from "./SummonerChampStatsCard.styled";
import { Container } from "components/atoms/Container/Container";
import { CustomLink } from "components/atoms/CustomLink/CustomLink";
import { Dropdown } from "components/atoms/Dropdown/Dropdown";
import { FlexColCenter, FlexRowSpaceBetween } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";
import { Span } from "components/atoms/Span/Span";
import { IndividualChampStatsCard } from "../IndividualChampStatsCard/IndividualChampStatsCard";
import { useGetSummonerRankedChampStatsQuery } from "../../../hooks/useGetSummonerRankedChampStatsQuery";

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

  return (
    <StyledSummonerChampStatsCard>
      <FlexRowSpaceBetween>
        <CustomLink underline="true" to="stats">See all stats</CustomLink>
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
        {isLoading && (
          <Container>
            <LoadingIndicator />
          </Container>
        )}
        {championRankedStatsData?.[stats].length
          ? championRankedStatsData?.[stats].slice(0, 5).map((champion, i) => <IndividualChampStatsCard data-order={i} key={i} champion={champion} />)
          : !isLoading ? <Span align="center">No {options.find(x => x.stateValue === stats).text} stats</Span> : null
        }
      </FlexColCenter>
    </StyledSummonerChampStatsCard>
  );
};
