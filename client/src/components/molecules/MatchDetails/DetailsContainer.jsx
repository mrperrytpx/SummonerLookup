import { Container } from "components/atoms/Container/Container";
import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";
import { useGetSummonerSingleMatchQuery } from "hooks/useGetSummonerSingleMatchQuery";
import { theme } from "styled/theme";
import { MatchDetails } from "./MatchDetails";

export const DetailsContainer = ({ matchId }) => {
    const { data: matchDetailsData, isLoading } =
        useGetSummonerSingleMatchQuery(matchId);

    if (isLoading)
        return (
            <Container>
                <LoadingIndicator center={true} />
            </Container>
        );

    if (matchDetailsData.info.gameMode === "CHERRY") {
        let teams = [];

        for (let i = 0; i < matchDetailsData.info.participants.length; i += 2) {
            teams.push({
                participants: matchDetailsData.info.participants.slice(
                    i,
                    i + 2
                ),
                bans: matchDetailsData.info.teams[0].bans.slice(i, i + 2),
            });
        }

        teams = teams.sort(
            (a, b) => a.participants[0].placement - b.participants[0].placement
        );

        return (
            <FlexCol
                style={{
                    marginBottom: "1.5rem",
                    borderBottom: `10px solid
            ${teams[0].win ? theme.matchResult.win : theme.matchResult.loss}`,
                    borderTop: `10px solid
            ${
                teams[teams.length - 1].win
                    ? theme.matchResult.loss
                    : theme.matchResult.win
            }`,
                    borderRadius: "10px",
                }}
            >
                {teams.map((team) => (
                    <MatchDetails
                        key={team.participants[0].championId}
                        team={team.participants}
                        bans={team.bans}
                    />
                ))}
            </FlexCol>
        );
    }

    const blueTeam = matchDetailsData?.info.participants.slice(0, 5);
    const redTeam = matchDetailsData?.info.participants.slice(5);

    return (
        <FlexCol
            style={{
                marginBottom: "1.5rem",
                borderBottom: `10px solid 
        ${blueTeam[0].win ? theme.matchResult.loss : theme.matchResult.win}`,
                borderTop: `10px solid 
        ${blueTeam[0].win ? theme.matchResult.win : theme.matchResult.loss}`,
                borderRadius: "10px",
            }}
        >
            <MatchDetails
                team={blueTeam}
                bans={matchDetailsData?.info.teams[0].bans}
            />
            <MatchDetails
                team={redTeam}
                bans={matchDetailsData?.info.teams[1].bans}
            />
        </FlexCol>
    );
};
