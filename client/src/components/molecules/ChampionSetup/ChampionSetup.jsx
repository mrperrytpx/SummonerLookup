import { GridBox } from "components/atoms/GridBoxes/GridBoxes.styled";
import { IconWithLevel } from "components/atoms/IconWithLevel/IconWithLevel";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { useQueryClient } from "react-query";
import { StyledChampionSetup } from "./ChampionSetup.styled";

export const ChampionSetup = ({ hasLevel, match, width, position }) => {

  const queryClient = useQueryClient();

  const version = queryClient.getQueryData(["version"]);
  const summonerSpells = queryClient.getQueryData(["summoner-spells"]);
  const runes = queryClient.getQueryData(["runes"]);
  const champions = queryClient.getQueryData(["champions"]);

  const keystoneRuneId = match?.perks.styles[0].selections[0].perk;
  const primaryRuneTreeId = match?.perks.styles[0].style;
  const secondaryRuneTreeId = match?.perks.styles[1].style;

  const primaryTree = runes.find(tree => tree.id === primaryRuneTreeId);
  const secondaryTree = runes.find(tree => tree.id === secondaryRuneTreeId);

  const firstSummonerSpell = summonerSpells.find(spell => spell.id === match.summoner1Id)?.iconPath.split("/lol-game-data/assets/").pop().toLowerCase();
  const secondSummonerSpell = summonerSpells.find(spell => spell.id === match.summoner2Id)?.iconPath.split("/lol-game-data/assets/").pop().toLowerCase();

  const noSummonerSpell = "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_Empty.png".split("/lol-game-data/assets/").pop().toLowerCase();

  return (
    <StyledChampionSetup position={position} data-champsetup>
      {!hasLevel
        ? <ImageContainer
          data-icon="true"
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champions.get(`${match.championId}`).id}.png`}
          alt="champion"
          width={`${width}px` || "40px"}
        />
        : <IconWithLevel
          level={match?.champLevel || "?"}
          data-icon
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champions.get(`${match.championId}`).id}.png`}
          alt="champion"
          width={`${width}px` || "40px"}
        />
      }
      <GridBox data-setupgrid rows={`repeat(2, minmax(${width / 2}px, 1fr))`} cols={`repeat(2, minmax(${width / 2}px, 1fr))`}>
        <ImageContainer
          border="black"
          background
          width={`${width / 2}px` || "20px"}
          src={`https://ddragon.leagueoflegends.com/cdn/img/${primaryTree.slots[0].runes.find(rune => rune.id === keystoneRuneId).icon}`}
          alt="Keystone rune"
          data-setup
        />
        <ImageContainer
          border="black"
          background
          width={`${width / 2}px` || "20px"}
          src={`https://ddragon.leagueoflegends.com/cdn/img/${secondaryTree.icon}`}
          alt="Secondary rune tree"
          data-setup
        />
        <ImageContainer
          border="black"
          width={`${width / 2}px` || "20px"}
          src={`https://raw.communitydragon.org/latest/game/${firstSummonerSpell || noSummonerSpell}`}
          alt="Summoner Spell 1"
          data-setup
        />
        <ImageContainer
          border="black"
          width={`${width / 2}px` || "20px"}
          src={`https://raw.communitydragon.org/latest/game/${secondSummonerSpell || noSummonerSpell}`}
          alt="Summoner Spell 2"
          data-setup
        />
      </GridBox>
    </StyledChampionSetup>
  );
};
