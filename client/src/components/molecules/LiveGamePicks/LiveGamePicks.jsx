import { FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { Span } from "components/atoms/Span/Span";
import { StyledLiveGamePicks } from "./LiveGamePicks.styled";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { useQueryClient } from "react-query";

export const LiveGamePicks = ({ picks, direction }) => {

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
    <StyledLiveGamePicks direction={direction}>
      {picks?.map((pick, i) => (
        <div data-grid key={i}>
          <ImageContainer
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champions.get(`${pick.championId}`).id}.png`}
            width="40px"
          />
          <Span align="center" size="s">{pick.summonerName}</Span>
          <FlexRowStart>
            {pick.perks.perkIds.slice(0, 4).map((perkId, i) => (
              <ImageContainer
                key={i}
                border
                width="32px"
                src={`https://ddragon.leagueoflegends.com/cdn/img/${getTree(pick.perks.perkStyle).slots[i].runes.find(rune => rune.id === perkId).icon}`}
              />
            ))}
          </FlexRowStart>
          <FlexRowStart>
            {pick.perks.perkIds.slice(4, 6).map((perkId, i) => {
              const allTreeRunes = getAllRunes(getTree(pick.perks.perkSubStyle).slots);
              return <ImageContainer
                key={i}
                border
                width="32px"
                src={`https://ddragon.leagueoflegends.com/cdn/img/${allTreeRunes.find(rune => rune.id === perkId).icon}`}
              />;
            })}
          </FlexRowStart>
        </div>
      ))}
    </StyledLiveGamePicks>
  );
};