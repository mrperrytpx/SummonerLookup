import { Outlet, useParams } from "react-router-dom";
import { useGetSummonerQuery } from "../../../hooks/useGetSummonerQuery";
import { StyledSummoner } from "./Summoner.styled";
import { useGetSummonerChallengesQuery } from "../../../hooks/useGetSummonerChallengesQuery";
import { SummonerCard } from "../../organisms/SummonerCard/SummonerCard";
import { SummonerNavbar } from "../../organisms/SummonerNavbar/SummonerNavbar";
import { useGetSummonerRankedStatsQuery } from "../../../hooks/useGetSummonerRankedStatsQuery";
import { Container } from "components/atoms/Container/Container";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";
import { ErrorText } from "components/atoms/ErrorText/ErrorText";

export const Summoner = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData, isLoading: isSummonerLoading, isError } = useGetSummonerQuery(server, summonerName);
  const { data: summonerChallengesData, isLoading: isSummonerChallengesLoading } = useGetSummonerChallengesQuery(server, summonerName, summonerData?.puuid);
  useGetSummonerRankedStatsQuery(server, summonerData?.summonerId);

  if (isSummonerLoading || isSummonerChallengesLoading) return (
    <Container bg={false} height="500px">
      <LoadingIndicator center={true} />
    </Container>
  );

  if (isError) return (
    <StyledSummoner>
      <Container height="300px" bg={true}>
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
