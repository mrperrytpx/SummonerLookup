import { useRef, useState } from "react";
import { StyledSummonerMatchCard } from "./SummonerMatchCard.styled";
import { FlexColCenter } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { Span } from "components/atoms/Span/Span";
import { ChampionSetup } from "../ChampionSetup/ChampionSetup";
import { MatchItems } from "../MatchItems/MatchItems";
import { ErrorBoundary } from "utils/ErrorBoundry";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import { QUEUE_TYPES } from "consts/queueTypes";
import { DetailsContainer } from "../MatchDetails/DetailsContainer";

export const SummonerMatchCard = ({ match }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const matchRef = useRef(null);
    const isOnScreen = useIntersectionObserver(matchRef, {
        rootMargin: "500px",
    });

    const itemsArray = [
        match.participants.item0,
        match.participants.item1,
        match.participants.item2,
        match.participants.item3,
        match.participants.item4,
        match.participants.item5,
        match.participants.item6,
    ];

    const gameVersion =
        match.gameVersion.split(".").slice(0, 2).join(".") + ".1";

    return (
        <ErrorBoundary>
            <StyledSummonerMatchCard
                isVisible={isOnScreen}
                isWin={match.participants.win}
            >
                <div ref={matchRef} onClick={() => setIsExpanded(!isExpanded)}>
                    <FlexColCenter gap="0.25rem">
                        <Span size="m">{QUEUE_TYPES[match?.queueId]}</Span>
                        <Span size="s">
                            {match.win ? "Victory" : "Defeat"}
                            {" - "}
                            {match?.gameEndTimestamp
                                ? `${parseInt(match.gameDuration / 60)}m ${
                                      match.gameDuration % 60
                                  }s`
                                : `${parseInt(match.gameDuration / 60000)}m ${
                                      (match.gameDuration % 60000) % 60
                                  }s`}
                        </Span>
                        <Span size="s">
                            {new Date(
                                match?.gameEndTimestamp
                                    ? match?.gameEndTimestamp
                                    : match?.gameStartTimestamp +
                                      match?.gameDuration
                            ).toDateString()}
                        </Span>
                    </FlexColCenter>

                    <FlexColCenter>
                        <ChampionSetup
                            hasLevel={true}
                            position="center"
                            match={match.participants}
                            width={60}
                        />
                    </FlexColCenter>

                    <FlexColCenter gap="0.25rem">
                        <Span width="auto" align="center" size="s">
                            ({match.participants.kills}/
                            {match.participants.deaths}/
                            {match.participants.assists})
                        </Span>
                        <Span width="auto" align="center" size="s">
                            {match.participants.totalMinionsKilled} CS(
                            {Math.round(
                                (match.participants.totalMinionsKilled /
                                    match.gameDuration) *
                                    600
                            ) / 10}
                            )
                        </Span>
                        <Span width="auto" align="center" size="s">
                            {match.participants.visionScore} VS
                        </Span>
                    </FlexColCenter>

                    <MatchItems
                        gameVersion={gameVersion}
                        items={itemsArray}
                        initialWidth={35}
                    />
                </div>
                {isExpanded && (
                    <ErrorBoundary>
                        <DetailsContainer
                            matchId={`${match.platformId}_${match.gameId}`}
                        />
                    </ErrorBoundary>
                )}
            </StyledSummonerMatchCard>
        </ErrorBoundary>
    );
};
