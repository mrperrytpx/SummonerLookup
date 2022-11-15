import { useQueryClient } from "react-query";
import { FlexRow, FlexColCenter } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { Span } from "components/atoms/Span/Span";
import { StyledIndividualChampStatsCard } from "./IndividualChampStatsCard.styled";

export const IndividualChampStatsCard = ({ champion }) => {

  const queryClient = useQueryClient();

  const champions = queryClient.getQueryData(["champions"]);
  const version = queryClient.getQueryData(["version"]);

  const kda = ((champion.kills + champion.assists) / champion.deaths).toFixed(2);
  const averageKills = (champion.kills / champion.totalMatches).toFixed(1);
  const averageDeaths = (champion.deaths / champion.totalMatches).toFixed(1);
  const averageAssists = (champion.assists / champion.totalMatches).toFixed(1);
  const winrate = Math.round((champion.wins / champion.totalMatches) * 100);

  return (
    <StyledIndividualChampStatsCard>
      <FlexRow gap="0.25rem">
        <FlexColCenter>
          <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champions.get(`${champion.championId}`).id}.png`} alt="" />
        </FlexColCenter>
        <FlexColCenter>
          <Span align="left" size="s">{champions.get(`${champion.championId}`).name}</Span>
        </FlexColCenter>
      </FlexRow>

      <FlexColCenter style={{ flex: "1" }}>
        <Span align="center" size="s">{kda} KDA</Span>
        <Span align="center" size="s">{averageKills} {averageDeaths} {averageAssists}</Span>
      </FlexColCenter>

      <FlexColCenter>
        <Span align="right" size="s">{winrate}%</Span>
        <Span align="right" size="s">{champion.totalMatches} games</Span>
      </FlexColCenter>
    </StyledIndividualChampStatsCard>
  );
};
