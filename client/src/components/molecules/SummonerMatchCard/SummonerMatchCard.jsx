import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledSummonerMatchCard } from "./SummonerMatchCard.styled";
import { FlexColCenter } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { Span } from "components/atoms/Span/Span";
import { MatchDetails } from "../MatchDetails/MatchDetails";
import { ChampionSetup } from "../ChampionSetup/ChampionSetup";
import { MatchItems } from "../MatchItems/MatchItems";
import { ErrorBoundary } from "utils/ErrorBoundry";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import { QUEUE_TYPES } from "consts/queueTypes";

export const SummonerMatchCard = ({ match }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);

  const matchRef = useRef(null);
  const isOnScreen = useIntersectionObserver(matchRef, { rootMargin: "500px" });

  const summonerIndex = match?.metadata?.participants?.indexOf(summonerData.puuid);
  const summonerMatchData = match?.info?.participants[summonerIndex];

  const itemsArray = [
    summonerMatchData.item0,
    summonerMatchData.item1,
    summonerMatchData.item2,
    summonerMatchData.item3,
    summonerMatchData.item4,
    summonerMatchData.item5,
    summonerMatchData.item6,
  ];

  return (
    <ErrorBoundary>
      <StyledSummonerMatchCard isVisible={isOnScreen} isWin={summonerMatchData.win}>
        <div ref={matchRef} onClick={() => setIsExpanded(!isExpanded)}>
          <FlexColCenter gap="0.25rem">
            <Span size="m">{QUEUE_TYPES[match?.info?.queueId]}</Span>
            <Span size="s">
              {summonerMatchData.win ? "Victory" : "Defeat"}
              {" - "}
              {match?.info?.gameEndTimestamp
                ? `${parseInt(match.info.gameDuration / 60)}m ${match.info.gameDuration % 60}s`
                : `${parseInt(match.info.gameDuration / 60000)}m ${match.info.gameDuration % 60000 % 60}s`
              }
            </Span>
            <Span size="s">{(new Date(match?.info?.gameEndTimestamp ? match?.info?.gameEndTimestamp : match?.info?.gameStartTimestamp + match?.info?.gameDuration)).toDateString()}</Span>
          </FlexColCenter>

          <ChampionSetup hasLevel={true} position="center" summonerMatchData={summonerMatchData} width={60} />

          <FlexColCenter>
            <Span width="auto" align="center" size="s">{summonerMatchData.kills} / {summonerMatchData.deaths} / {summonerMatchData.assists}</Span>
            <Span width="auto" align="center" size="s">{summonerMatchData.totalMinionsKilled} CS ({Math.round(summonerMatchData.totalMinionsKilled / match.info.gameDuration * 600) / 10})</Span>
            <Span width="auto" align="center" size="s">{summonerMatchData.visionScore} VS</Span>
          </FlexColCenter>

          <MatchItems items={itemsArray} initialWidth={35} />
        </div>
        {isExpanded &&
          (<ErrorBoundary>
            <MatchDetails match={match} />
          </ErrorBoundary>
          )}
      </StyledSummonerMatchCard >
    </ErrorBoundary>
  );
};