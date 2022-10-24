import { useGetSummonerLiveGameQuery } from "hooks/useGetSummonerLiveGameQuery";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useParams } from "react-router-dom";
import { StyledSummonerLiveGame } from "./SummonerLiveGame.styled";
import { LiveGameBans } from "components/molecules/LiveGameBans/LiveGameBans";
import { Span } from "components/atoms/Span/Span";
import { FlexCol, FlexRowSpaceBetween } from "components/atoms/FlexBoxes/FlexBoxes.styled";
// import { liveGameData } from "consts/gameObject";
import { LiveGamePicks } from "components/molecules/LiveGamePicks/LiveGamePicks";

export const SummonerLiveGame = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: liveGameData, isLoading } = useGetSummonerLiveGameQuery(server, summonerData?.summonerId);

  if (isLoading) return <Span>Loading...</Span>;

  if (!liveGameData) return <Span>Not in live game</Span>;

  return (
    <StyledSummonerLiveGame>

      <FlexRowSpaceBetween gap=".5rem">
        <FlexCol flex="1">
          <Span padding={"0.5rem 0.6rem"} underline>Blue side bans:</Span>
          <LiveGameBans bans={liveGameData?.bannedChampions?.slice(0, 5)} />
        </FlexCol>
        <FlexCol flex="1">
          <Span align="right" underline padding={"0.5rem 0.6rem"}>Red side bans:</Span>
          <LiveGameBans align="right" bans={liveGameData?.bannedChampions?.slice(5, 10)} />
        </FlexCol>
      </FlexRowSpaceBetween>

      <FlexRowSpaceBetween gap="0.5rem">
        <FlexCol flex="1">
          <Span underline padding={"0.5rem 0.6rem"}>Blue side picks:</Span>
          <LiveGamePicks picks={liveGameData?.participants?.slice(0, 5)} />
        </FlexCol>
        <FlexCol flex="1">
          <Span align="right" underline padding={"0.5rem 0.6rem"}>Red side picks:</Span>
          <LiveGamePicks direction="rtl" picks={liveGameData?.participants?.slice(5, 10)} />
        </FlexCol>
      </FlexRowSpaceBetween>


    </StyledSummonerLiveGame>
  );
};
