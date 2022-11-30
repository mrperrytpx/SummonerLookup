import { Container } from "components/atoms/Container/Container";
import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";
import { useGetSummonerSingleMatchQuery } from "hooks/useGetSummonerSingleMatchQuery";
import { theme } from "styled/theme";
import { MatchDetails } from "./MatchDetails";

export const DetailsContainer = ({ matchId }) => {

  const { data: matchDetailsData, isLoading } = useGetSummonerSingleMatchQuery(matchId);

  const blueTeam = matchDetailsData?.info.participants.slice(0, 5);
  const redTeam = matchDetailsData?.info.participants.slice(5);

  if (isLoading) return (
    <Container>
      <LoadingIndicator center={true} />
    </Container>
  );

  return (
    <FlexCol style={{
      marginBottom: "1.5rem",
      borderBottom: `10px solid ${theme.backgroundColors.tertiary}`,
      borderTop: `10px solid ${theme.backgroundColors.tertiary}`,
      borderRadius: "10px"
    }}>
      <MatchDetails team={blueTeam} bans={matchDetailsData?.info.teams[0].bans} />
      <MatchDetails team={redTeam} bans={matchDetailsData?.info.teams[1].bans} />
    </FlexCol>
  );
};
