import { SummonerRankCard } from "../../molecules/SummonerRankCard/SummonerRankCard";
import { SummonerChampStatsCard } from "../../molecules/SummonerChampStatsCard/SummonerChampStatsCard";
import { StyledSummonerOverview } from "./SummonerOverview.styled";
import styled from "styled-components";
import { FlexCol } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { useParams } from "react-router-dom";
import { useGetSummonerQuery } from "../../../hooks/useGetSummonerQuery";
import { useGetSummonerRankedStatsQuery } from "../../../hooks/useGetSummonerRankedStatsQuery";

const StyledFlexColOne = styled(FlexCol)`
  flex: 1;
`;

const StyledFlexColTwo = styled(FlexCol)`
  flex: 2;
`;

export const SummonerOverview = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: summonerRankedData } = useGetSummonerRankedStatsQuery(server, summonerData?.summonerId);

  return (
    <StyledSummonerOverview>
      <StyledFlexColTwo>
        <div style={{ color: "white" }}>OVERVIEW</div>
      </StyledFlexColTwo>
      <StyledFlexColOne>
        {summonerRankedData?.length
          ? [...summonerRankedData]?.reverse().map(ranked => <SummonerRankCard key={ranked?.leagueId} ranked={ranked} />)
          : null
        }
        <SummonerChampStatsCard />
      </StyledFlexColOne>
    </StyledSummonerOverview>
  );
};
