import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useGetSummonerMatchesInfiniteQuery } from "hooks/useGetSummonerMatchesInfiniteQuery";
import { StyledSummonerMatches } from "./SummonerMatches.styled";
import { useParams } from "react-router-dom";
import { SummonerMatchCard } from "components/molecules/SummonerMatchCard/SummonerMatchCard";
import { Span } from "components/atoms/Span/Span";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const SummonerMatches = () => {

  const { ref, inView } = useInView();
  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: summonerMatchesData, isLoading, fetchNextPage } = useGetSummonerMatchesInfiniteQuery(server, summonerData?.puuid);

  useEffect(function nextPage() {
    if (inView) fetchNextPage();
  }, [inView]);

  if (isLoading) return <div style={{ color: "white" }}>Loading...</div>;

  return (
    <StyledSummonerMatches>
      <Span underline size="m" align="left">Match History</Span>
      {summonerMatchesData?.pages?.map((page, i) => (
        <Fragment key={i}>
          {page?.matchesData?.map((match, i) => <SummonerMatchCard key={i} match={match?.value} />)}
        </Fragment>
      ))}
      {summonerMatchesData && <div ref={ref}></div>}
    </StyledSummonerMatches>
  );
};
