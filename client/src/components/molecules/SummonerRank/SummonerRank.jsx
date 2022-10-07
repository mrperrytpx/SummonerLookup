import { StyledSummonerRank } from "./SummonerRank.styled";
import { FlexColCenter, FlexRowSpaceBetween, FlexRow } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { Span } from "../../atoms/Span/Span";
import { ImageContainer } from "../../atoms/ImageContainer/ImageContainer";
import { RANKED_TYPES } from "../../../consts/rankedTypes";
import { PromoGameStatus } from "../../atoms/PromoGameStatus/PromoGameStatus";

export const SummonerRank = ({ ranked }) => {

  const winrate = ((ranked.wins / (ranked.wins + ranked.losses)) * 100).toFixed(2);

  return (
    <StyledSummonerRank>
      <Span size="l">{RANKED_TYPES[ranked.queueType]}</Span>

      <FlexRowSpaceBetween>
        <FlexRow style={{ gap: "1rem" }}>
          <ImageContainer width="65px">
            <img src={`https://static.u.gg/assets/lol/ranks/2d/${ranked.tier?.toLowerCase()}.svg`} alt="Ranked tier image" />
          </ImageContainer>
          <FlexColCenter style={{ gap: "0.2rem" }}>
            <Span size="m">{ranked.tier} {ranked.rank}</Span>
            <Span size="s">{ranked.leaguePoints} LP</Span>
          </FlexColCenter>
        </FlexRow>
        <FlexColCenter style={{ gap: "0.2rem" }}>
          <Span align="right" size="s">{ranked.wins}W {ranked.losses}L</Span>
          <Span align="right" size="s">{winrate}%</Span>
        </FlexColCenter>
      </FlexRowSpaceBetween>

      {ranked?.miniSeries
        ? <FlexRow style={{ gap: "0.3rem" }}>
          {[...ranked?.miniSeries.progress.split("")].map((promo, i) => (
            <PromoGameStatus promo={promo} key={i} />
          ))}
        </FlexRow>
        : null
      }
    </StyledSummonerRank>
  );
};
