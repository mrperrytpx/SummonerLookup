import { Outlet, useParams } from "react-router-dom";
import { StyledSummoner } from "./Summoner.styled";
import { Container } from "components/atoms/Container/Container";
import { ErrorText } from "components/atoms/ErrorText/ErrorText";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";
import { SummonerCard } from "../../organisms/SummonerCard/SummonerCard";
import { SummonerNavbar } from "../../organisms/SummonerNavbar/SummonerNavbar";
import { useGetSummonerRankedStatsQuery } from "../../../hooks/useGetSummonerRankedStatsQuery";
import { useGetSummonerChallengesQuery } from "../../../hooks/useGetSummonerChallengesQuery";
import { useGetSummonerQuery } from "../../../hooks/useGetSummonerQuery";

export const Summoner = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData, isLoading: isSummonerLoading, isError } = useGetSummonerQuery(server, summonerName);
  const { data: summonerChallengesData, isLoading: isSummonerChallengesLoading } = useGetSummonerChallengesQuery(server, summonerName, summonerData?.puuid);
  useGetSummonerRankedStatsQuery(server, summonerData?.summonerId);

  if (isSummonerLoading || isSummonerChallengesLoading) return (
    <Container bg={false} height="90vh">
      <LoadingIndicator margin="5rem 0 0 0" center={true} />
    </Container>
  );

  if (isError) return (
    <StyledSummoner>
      <Container height="300px">
        <ErrorText size="clamp(1rem, 2vw, 1.8rem)" center={true}>
          Couldn't find summoner "{summonerName}".
        </ErrorText >
        <ErrorText size="clamp(1rem, 2vw, 1.5rem)" center={true}>
          Maybe they're on another server?
        </ErrorText>
      </Container>
    </StyledSummoner>
  );

  return (
    <StyledSummoner>
      <SummonerCard summonerData={summonerData} summonerChallengesData={summonerChallengesData} />
      <SummonerNavbar />
      <Outlet />
    </StyledSummoner>
  );
};