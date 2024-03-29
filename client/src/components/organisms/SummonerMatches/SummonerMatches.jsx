import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { StyledSummonerMatches } from "./SummonerMatches.styled";
import { Button } from "components/atoms/Button/Button";
import { Container } from "components/atoms/Container/Container";
import { ErrorText } from "components/atoms/ErrorText/ErrorText";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";
import { Span } from "components/atoms/Span/Span";
import { SummonerMatchCard } from "components/molecules/SummonerMatchCard/SummonerMatchCard";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useGetSummonerMatchesInfiniteQuery } from "hooks/useGetSummonerMatchesInfiniteQuery";

export const SummonerMatches = () => {
    const { server, summonerName } = useParams();
    const { data: summonerData } = useGetSummonerQuery(server, summonerName);
    const {
        data: summonerMatchesData,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useGetSummonerMatchesInfiniteQuery(server, summonerData?.puuid);

    if (isLoading)
        return (
            <StyledSummonerMatches>
                <Span underline size="m" align="left">
                    Match History
                </Span>
                <Container>
                    <LoadingIndicator center={false} />
                </Container>
            </StyledSummonerMatches>
        );

    return (
        <StyledSummonerMatches noMatches={summonerMatchesData?.length}>
            <Span underline size="m" align="left">
                Match History
            </Span>
            {summonerMatchesData?.pages[0].matchesData.length ? (
                <>
                    {summonerMatchesData?.pages?.map((page, i) => (
                        <Fragment key={i}>
                            {page?.matchesData?.map((match, i) => (
                                <SummonerMatchCard key={i} match={match} />
                            ))}
                        </Fragment>
                    ))}
                </>
            ) : (
                <Container>
                    <ErrorText size="clamp(.8rem, 3vw, 1.4rem)" center={true}>
                        Match history is empty
                    </ErrorText>
                    <ErrorText size="clamp(.8rem, 3vw, 1.4rem)" center={true}>
                        (┬┬﹏┬┬)
                    </ErrorText>
                </Container>
            )}
            {summonerMatchesData?.pages?.[0]?.matchesData.length && hasNextPage ? (
                <Button
                    disabled={!hasNextPage || isFetchingNextPage}
                    padding="0.1rem"
                    variant="tertiary"
                    onClick={() => fetchNextPage()}
                    type="button"
                    wide
                    fontSize="0.9rem"
                >
                    {isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load more" : "Nothing more to load"}
                </Button>
            ) : null}
        </StyledSummonerMatches>
    );
};
