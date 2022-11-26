import { useParams } from "react-router-dom";
import { StyledSummonerLiveGame } from "./SummonerLiveGame.styled";
import { Container } from "components/atoms/Container/Container";
import { ErrorText } from "components/atoms/ErrorText/ErrorText";
import { FlexColSpaceBetween, FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";
import { GameBans } from "components/molecules/GameBans/GameBans";
import { LiveGamePicks } from "components/molecules/LiveGamePicks/LiveGamePicks";
import { useGetSummonerLiveGameQuery } from "hooks/useGetSummonerLiveGameQuery";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { GameTimer } from "components/atoms/GameTimer/GameTimer";

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
      <GameTimer gameStartTime={liveGameData?.gameStartTime} />
      <FlexRowStart data-picks gap="1rem">
        <FlexColSpaceBetween data-team gap=".5rem">
          <GameBans align="left" bans={liveGameData?.bannedChampions?.slice(0, 5)}>BANS: </GameBans>
          <LiveGamePicks picks={liveGameData?.participants?.slice(0, 5)} />
        </FlexColSpaceBetween>
        <FlexColSpaceBetween data-team gap=".5rem">
          <GameBans align="left" bans={liveGameData?.bannedChampions?.slice(5, 10)}>BANS:</GameBans>
          <LiveGamePicks picks={liveGameData?.participants?.slice(5, 10)} />
        </FlexColSpaceBetween>
      </FlexRowStart>
    </StyledSummonerLiveGame>
  );
};
