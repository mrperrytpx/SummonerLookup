import { useQueryClient } from "react-query";
import { StyledIndividualChampStatsCard } from "./IndividualChampStatsCard.styled";
import { FlexRow, FlexColCenter } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { Span } from "components/atoms/Span/Span";

export const IndividualChampStatsCard = ({ champion }) => {
    const queryClient = useQueryClient();

    const champions = queryClient.getQueryData(["champions"]);
    const version = queryClient.getQueryData(["version"]);

    const kda = Math.round(((champion.kills + champion.assists) / (champion.deaths || 1)) * 100) / 100;
    const averageKills = Math.round((champion.kills / champion.totalMatches) * 10) / 10;
    const averageDeaths = Math.round((champion.deaths / champion.totalMatches) * 10) / 10;
    const averageAssists = Math.round((champion.assists / champion.totalMatches) * 10) / 10;
    const winrate = Math.round((champion.wins / champion.totalMatches) * 100);

    return (
        <StyledIndividualChampStatsCard>
            <FlexRow gap="0.25rem">
                <FlexColCenter>
                    <img
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${
                            champions.get(`${champion.championId}`).id
                        }.png`}
                        alt=""
                    />
                </FlexColCenter>
                <FlexColCenter>
                    <Span align="left" size="s">
                        {champions.get(`${champion.championId}`).name}
                    </Span>
                </FlexColCenter>
            </FlexRow>

            <FlexColCenter flex="1">
                <Span align="center" size="s">
                    {kda} KDA
                </Span>
                <Span size="s" align="center">
                    {averageKills},{" "}
                    <Span size="s" color="#ff6961">
                        {averageDeaths}
                    </Span>
                    , {averageAssists}
                </Span>
            </FlexColCenter>

            <FlexColCenter>
                <Span align="right" size="s">
                    {winrate}%
                </Span>
                <Span align="right" size="s">
                    {champion.totalMatches} games
                </Span>
            </FlexColCenter>
        </StyledIndividualChampStatsCard>
    );
};
