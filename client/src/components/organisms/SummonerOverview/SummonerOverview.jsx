import { SummonerRankCard } from "../../molecules/SummonerRankCard/SummonerRankCard";
import { SummonerChampStatsCard } from "../../molecules/SummonerChampStatsCard/SummonerChampStatsCard";
import { StyledSummonerOverview } from "./SummonerOverview.styled";
import { FlexCol, FlexRow } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { useParams } from "react-router-dom";
import { useGetSummonerQuery } from "../../../hooks/useGetSummonerQuery";
import { useGetSummonerRankedStatsQuery } from "../../../hooks/useGetSummonerRankedStatsQuery";
import { SummonerMatches } from "../SummonerMatches/SummonerMatches";
import { SummonerUnrankedCard } from "components/molecules/SummonerUnrankedCard/SummonerUnrankedCard";

export const SummonerOverview = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: summonerRankedData } = useGetSummonerRankedStatsQuery(server, summonerData?.summonerId);

  const sortQueues = (a, b) => {
    if (a.wins + a.losses < b.wins + b.losses) return 1;
    if (a.wins + a.losses > b.wins + b.losses) return -1;
    return 0;
  };

  return (
    <StyledSummonerOverview>
      <FlexRow flex="2">
        <SummonerMatches />
      </FlexRow>
      <FlexCol flex="1">
        <FlexCol data-stats="true">
          {summonerRankedData?.length
            ? [...summonerRankedData]?.sort(sortQueues).map(ranked => <SummonerRankCard key={ranked?.leagueId} ranked={ranked} />)
            : <SummonerUnrankedCard />
          }
        </FlexCol>
        <SummonerChampStatsCard />
      </FlexCol>
    </StyledSummonerOverview>
  );
};
