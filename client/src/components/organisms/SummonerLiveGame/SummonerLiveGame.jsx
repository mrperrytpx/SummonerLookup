import { useGetSummonerLiveGameQuery } from "hooks/useGetSummonerLiveGameQuery";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useParams } from "react-router-dom";
import { StyledSummonerLiveGame } from "./SummonerLiveGame.styled";
import { GameBans } from "components/molecules/GameBans/GameBans";
import { LiveGamePicks } from "components/molecules/LiveGamePicks/LiveGamePicks";
import { FlexColSpaceBetween } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { ErrorText } from "components/atoms/ErrorText/ErrorText";
import { Container } from "components/atoms/Container/Container";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";

export const SummonerLiveGame = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: liveGameData, isLoading } = useGetSummonerLiveGameQuery(server, summonerData?.summonerId);

  if (isLoading) return (
    <Container>
      <LoadingIndicator />
    </Container>
  );

  if (!liveGameData) return (
    <Container>
      <ErrorText size="clamp(1rem, 3vw, 1.5rem)" center={true}>"{summonerData.summonerName}" is currently not in a game.</ErrorText>
      <ErrorText size="clamp(.8rem, 3vw, 1.2rem)" center={true}>If the game just started, try refreshing the page.</ErrorText>
    </Container>
  );

  return (
    <StyledSummonerLiveGame>

      <FlexColSpaceBetween gap=".5rem">
        <GameBans align="left" bans={liveGameData?.bannedChampions?.slice(0, 5)}>BANS: </GameBans>
        <LiveGamePicks picks={liveGameData?.participants?.slice(0, 5)} />
      </FlexColSpaceBetween>

      <FlexColSpaceBetween gap=".5rem">
        <GameBans align="left" bans={liveGameData?.bannedChampions?.slice(5, 10)}>BANS:</GameBans>
        <LiveGamePicks picks={liveGameData?.participants?.slice(5, 10)} />
      </FlexColSpaceBetween>

    </StyledSummonerLiveGame>
  );
};
