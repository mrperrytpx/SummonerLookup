import { useParams } from "react-router-dom";
import { StyledSummonerOverview } from "./SummonerOverview.styled";
import { SummonerChampStatsCard } from "../../molecules/SummonerChampStatsCard/SummonerChampStatsCard";
import { FlexCol, FlexRow } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { SummonerUnrankedCard } from "components/molecules/SummonerUnrankedCard/SummonerUnrankedCard";
import { SummonerRankCard } from "../../molecules/SummonerRankCard/SummonerRankCard";
import { SummonerMatches } from "../SummonerMatches/SummonerMatches";
import { useGetSummonerQuery } from "../../../hooks/useGetSummonerQuery";
import { useGetSummonerRankedStatsQuery } from "../../../hooks/useGetSummonerRankedStatsQuery";

export const SummonerOverview = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: summonerRankedData, isLoading } = useGetSummonerRankedStatsQuery(server, summonerData?.summonerId);

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
            ? [...summonerRankedData]?.sort(sortQueues).map(ranked => <SummonerRankCard isLoading={isLoading} key={ranked?.leagueId} ranked={ranked} />)
            : <SummonerUnrankedCard />
          }
        </FlexCol>
        <SummonerChampStatsCard />
      </FlexCol>
    </StyledSummonerOverview>
  );
};
