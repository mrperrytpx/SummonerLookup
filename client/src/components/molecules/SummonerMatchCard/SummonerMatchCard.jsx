import { FlexColCenter, FlexRow, FlexRowCenter } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { GridBox } from "components/atoms/GridBoxes/GridBoxes.styled";
import { IconWithLevel } from "components/atoms/IconWithLevel/IconWithLevel";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { Span } from "components/atoms/Span/Span";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useScreenSize } from "hooks/useScreenSize";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { StyledSummonerMatchCard } from "./SummonerMatchCard.styled";
import { QUEUE_TYPES } from "consts/queueTypes";
import { useEffect } from "react";

export const SummonerMatchCard = ({ match }) => {

  // const { width } = useScreenSize();
  const queryClient = useQueryClient();
  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);

  const version = queryClient.getQueryData(["version"]);
  // const items = queryClient.getQueryData(["items"]);
  const runes = queryClient.getQueryData(["runes"]);
  const summonerSpells = queryClient.getQueryData(["summoner-spells"]);

  const summonerIndex = match?.metadata?.participants?.indexOf(summonerData.puuid);
  const summonerMatchData = match?.info?.participants[summonerIndex];

  const keystoneRuneId = summonerMatchData?.perks.styles[0].selections[0].perk;
  const primaryRuneTreeId = summonerMatchData?.perks.styles[0].style;
  const secondaryRuneTreeId = summonerMatchData?.perks.styles[1].style;

  const primaryTree = runes.find(tree => tree.id === primaryRuneTreeId);
  const secondaryTree = runes.find(tree => tree.id === secondaryRuneTreeId);

  const firstSummonerSpell = summonerSpells.find(spell => spell.id === summonerMatchData.summoner1Id).iconPath.split("/lol-game-data/assets/").pop().toLowerCase();
  const secondSummonerSpell = summonerSpells.find(spell => spell.id === summonerMatchData.summoner2Id).iconPath.split("/lol-game-data/assets/").pop().toLowerCase();
  // string.split("/lol-game-data/assets/").pop().toLowerCase()

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
    <StyledSummonerMatchCard isWin={summonerMatchData.win}>

      <FlexColCenter data-order="1" style={{ width: "100%" }} gap="0.25rem">
        <Span size="m">{QUEUE_TYPES[match?.info?.queueId]}</Span>
        <Span size="s">{summonerMatchData.win ? "Victory" : "Defeat"} - {parseInt(match.info.gameDuration / 60)}m {match.info.gameDuration % 60}s</Span>
        <Span size="s">{(new Date(match?.info?.gameEndTimestamp)).toDateString()}</Span>
      </FlexColCenter>

      <FlexRowCenter data-order="2">
        <IconWithLevel
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${summonerMatchData.championName}.png`}
          alt="Champion"
          level={summonerMatchData.champLevel}
          width={60}
        />
        <GridBox rows="repeat(2, minmax(26px, 1fr))" cols="repeat(2, minmax(26px, 1fr))">
          <ImageContainer
            border="black"
            background
            width="26px"
            src={`https://ddragon.leagueoflegends.com/cdn/img/${primaryTree.slots[0].runes.find(rune => rune.id === keystoneRuneId).icon}`}
            alt="Keystone rune"
          />
          <ImageContainer
            border="black"
            background
            width="26px"
            src={`https://ddragon.leagueoflegends.com/cdn/img/${secondaryTree.icon}`}
            alt="Secondary rune tree"
          />

          <ImageContainer
            border="black"
            width="26px"
            src={`https://raw.communitydragon.org/latest/game/${firstSummonerSpell}`}
            alt="Summoner Spell 1"
          />
          <ImageContainer
            border="black"
            width="26px"
            src={`https://raw.communitydragon.org/latest/game/${secondSummonerSpell}`}
            alt="Summoner Spell 2"
          />
        </GridBox>
      </FlexRowCenter>

      <FlexColCenter data-order="3">
        <Span align="center" size="s">{summonerMatchData.kills} / {summonerMatchData.deaths} / {summonerMatchData.assists}</Span>
        <Span align="center" size="s">{summonerMatchData.totalMinionsKilled} CS ({Math.round(summonerMatchData.totalMinionsKilled / match.info.gameDuration * 600) / 10})</Span>
        <Span align="center" size="s">{summonerMatchData.visionScore} VS</Span>
      </FlexColCenter>

      <GridBox cols="repeat(7, 1fr)" data-order="4">
        {itemsArray.map((item, i) => (
          item
            ? <ImageContainer
              border="black"
              width="100%"
              max="38px"
              key={i}
              src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item}.png`}
              alt="Item"
            />
            : <div key={i} style={{ backgroundColor: "black", width: "100%", maxWidth: "38px", border: "2px solid black", height: "38px" }} ></div>
        ))}
      </GridBox>

    </StyledSummonerMatchCard >
  );
};