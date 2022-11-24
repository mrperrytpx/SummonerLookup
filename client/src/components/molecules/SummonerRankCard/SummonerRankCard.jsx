import { StyledSummonerRankCard } from "./SummonerRankCard.styled";
import { FlexColCenter, FlexRowSpaceBetween, FlexRow } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { Span } from "../../atoms/Span/Span";
import { ImageContainer } from "../../atoms/ImageContainer/ImageContainer";
import { RANKED_TYPES } from "../../../consts/rankedTypes";
import { PromoGameStatus } from "../../atoms/PromoGameStatus/PromoGameStatus";
import { Container } from "components/atoms/Container/Container";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";

export const SummonerRankCard = ({ ranked, isLoading }) => {

  const winrate = Math.round((ranked.wins / (ranked.wins + ranked.losses)) * 10000) / 100;

  return (
    <StyledSummonerRankCard>
      <Span underline size="m">{RANKED_TYPES[ranked.queueType]}</Span>
      {isLoading && (
        <Container bg={true}>
          <LoadingIndicator />
        </Container>
      )}
      <FlexRowSpaceBetween>
        <FlexRow gap="1rem">
          <ImageContainer
            src={`https://static.u.gg/assets/lol/ranks/2d/${ranked.tier?.toLowerCase()}.svg`}
            alt="Ranked tier"
            width="65px"
          />
          <FlexColCenter gap="0.2rem">
            <Span size="m">{ranked.tier} {ranked.rank}</Span>
            <Span size="s">{ranked.leaguePoints} LP</Span>
          </FlexColCenter>
        </FlexRow>
        <FlexColCenter gap="0.2rem">
          <Span align="right" size="s">{ranked.wins}W {ranked.losses}L</Span>
          <Span align="right" size="s">{winrate}%</Span>
        </FlexColCenter>
      </FlexRowSpaceBetween>

      {ranked?.miniSeries
        ? <FlexRow gap="0.3rem">
          {[...ranked?.miniSeries.progress.split("")].map((promo, i) => (
            <PromoGameStatus promo={promo} key={i} />
          ))}
        </FlexRow>
        : null
      }
    </StyledSummonerRankCard>
  );
};
