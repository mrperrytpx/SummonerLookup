import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useGetSummonerMatchesInfiniteQuery } from "hooks/useGetSummonerMatchesInfiniteQuery";
import { StyledSummonerMatches } from "./SummonerMatches.styled";
import { useParams } from "react-router-dom";
import { SummonerMatchCard } from "components/molecules/SummonerMatchCard/SummonerMatchCard";
import { Span } from "components/atoms/Span/Span";
import { Fragment } from "react";
import { Button } from "components/atoms/Button/Button";

export const SummonerMatches = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const {
    data: summonerMatchesData,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useGetSummonerMatchesInfiniteQuery(server, summonerData?.puuid);

  if (isLoading) return <div style={{ color: "white" }}>Loading...</div>;

  return (
    <StyledSummonerMatches>
      <Span underline size="m" align="left">Match History</Span>
      {summonerMatchesData?.pages?.map((page, i) => (
        <Fragment key={i}>
          {page?.matchesData?.map((match, i) => <SummonerMatchCard key={i} match={match?.value} />)}
        </Fragment>
      ))}
      {summonerMatchesData && (
        <Button
          disabled={!hasNextPage || isFetchingNextPage}
          padding="0.1rem"
          variant="tertiary"
          onClick={() => fetchNextPage()}
          type="button"
          wide
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load 5 more'
              : 'Nothing more to load'}
        </Button>
      )}

    </StyledSummonerMatches>
  );
};