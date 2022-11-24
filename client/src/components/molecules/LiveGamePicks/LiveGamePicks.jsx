import { FlexRow, FlexRowCenter } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { StyledLiveGamePicks } from "./LiveGamePicks.styled";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { useQueryClient } from "react-query";
import { CustomLink } from "components/atoms/CustomLink/CustomLink";
import { useParams } from "react-router-dom";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";

export const LiveGamePicks = ({ picks, direction }) => {

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);

  const queryClient = useQueryClient();
  const version = queryClient.getQueryData(["version"]);
  const champions = queryClient.getQueryData(["champions"]);
  const runes = queryClient.getQueryData(["runes"]);

  const getTree = (runeId) => runes.find(rune => rune.id === runeId);

  const getAllRunes = (array) => {
    let returnArray = [];
    for (let key of array) {
      returnArray = [...returnArray, ...key.runes];
    }
    return returnArray;
  };
  // getTree(pick.perks.perkStyle).slots[0].runes.find(rune => rune.id === pick.perks.perkIds[0]).icon

  return (
    <StyledLiveGamePicks isPlayer={summonerName} direction={direction}>
      {picks?.map((pick, i) => (
        <div data-is-player={pick.summonerName === summonerData.summonerName} key={i}>
          <ImageContainer
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champions.get(`${pick.championId}`).id}.png`}
            width="40px"
          />
          <CustomLink fontSize=".8rem" to={`/${server.toLowerCase()}/${pick.summonerName}`} align={direction === "rtl" ? "right" : "left"} size="s">&nbsp;{pick.summonerName}</CustomLink>
          <FlexRow>
            <FlexRowCenter>
              {pick.perks.perkIds.slice(0, 4).map((perkId, i) => (
                <ImageContainer
                  data-rune
                  key={i}
                  border
                  width="32px"
                  src={`https://ddragon.leagueoflegends.com/cdn/img/${getTree(pick.perks.perkStyle).slots[i].runes.find(rune => rune.id === perkId).icon}`}
                />
              ))}
            </FlexRowCenter>
            <FlexRowCenter data-mobile>
              {pick.perks.perkIds.slice(4, 6).map((perkId, i) => {
                const allTreeRunes = getAllRunes(getTree(pick.perks.perkSubStyle).slots);
                return <ImageContainer
                  data-rune
                  key={i}
                  border
                  width="32px"
                  src={`https://ddragon.leagueoflegends.com/cdn/img/${allTreeRunes.find(rune => rune.id === perkId).icon}`}
                />;
              })}
            </FlexRowCenter>
          </FlexRow>
        </div>
      ))}
    </StyledLiveGamePicks>
  );
};