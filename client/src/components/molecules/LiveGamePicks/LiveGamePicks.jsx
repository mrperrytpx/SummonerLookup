import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { StyledLiveGamePicks } from "./LiveGamePicks.styled";
import { CustomLink } from "components/atoms/CustomLink/CustomLink";
import { FlexRow, FlexRowCenter } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";

export const LiveGamePicks = ({ picks, direction }) => {

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);

  const queryClient = useQueryClient();
  const version = queryClient.getQueryData(["version"]);
  const champions = queryClient.getQueryData(["champions"]);
  const runes = queryClient.getQueryData(["runes"]);

  // gets correct tree (array is len 5)
  const getTree = (runeId) => runes.find(rune => rune.id === runeId);

  const getAllRunesFromSecondayTree = (array) => {
    let returnArray = [];
    for (let key of array) {
      returnArray = [...returnArray, ...key.runes];
    }
    return returnArray;
  };

  return (
    <StyledLiveGamePicks isPlayer={summonerName} direction={direction}>
      {picks?.map((pick, i) => (
        <div data-is-player={pick.summonerName === summonerData.summonerName} key={i}>
          <ImageContainer
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champions.get(`${pick.championId}`).id}.png`}
            width="40px"
          />
          <CustomLink fontSize=".8rem" to={`/${server.toLowerCase()}/${pick.summonerName}`} size="s">&nbsp;{pick.summonerName}</CustomLink>
          <FlexRow>
            <FlexRowCenter>
              {pick.perks.perkIds.slice(0, 4).map((perkId, i) => {
                const keystoneTree = getTree(pick.perks.perkStyle).slots[i].runes.find(rune => rune.id === perkId);
                const names = keystoneTree.icon.split("/").map(x => x.toLowerCase());
                // triump edgecase, doens't have triumph/triump.png
                return (
                  <ImageContainer
                    data-rune
                    key={i}
                    border
                    width="32px"
                    // https://raw.communitydragon.org/latest/game/assets/perks/styles/domination/electrocute/electrocute.png
                    src={names.length === 5
                      ? `https://raw.communitydragon.org/latest/game/assets/perks/styles/${names[2]}/${names[3]}/${names[4]}`
                      : `https://raw.communitydragon.org/latest/game/assets/perks/styles/${names[2]}/${names[3]}`
                    }
                  />
                );
              })}
            </FlexRowCenter>
            <FlexRowCenter data-mobile>
              {pick.perks.perkIds.slice(4, 6).map((perkId, i) => {
                // gives all runes found in pick.perks.substyle.slots for the secondary tree
                const allTreeRunes = getAllRunesFromSecondayTree(getTree(pick.perks.perkSubStyle).slots);
                const singleRune = allTreeRunes.find(rune => rune.id === perkId);
                const names = singleRune.icon.split("/").map(x => x.toLowerCase());
                // triump edgecase, doens't have triumph/triump.png
                return (
                  <ImageContainer
                    data-rune
                    key={i}
                    border
                    width="32px"
                    // https://raw.communitydragon.org/latest/game/assets/perks/styles/domination/electrocute/electrocute.png
                    src={names.length === 5
                      ? `https://raw.communitydragon.org/latest/game/assets/perks/styles/${names[2]}/${names[3]}/${names[4]}`
                      : `https://raw.communitydragon.org/latest/game/assets/perks/styles/${names[2]}/${names[3]}`
                    }
                  />
                );
              })}
            </FlexRowCenter>

          </FlexRow>
        </div>
      ))}
    </StyledLiveGamePicks>
  );
};