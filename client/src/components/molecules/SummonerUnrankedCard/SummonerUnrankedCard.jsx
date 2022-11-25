import { StyledSummonerUnrankedCards } from "./SummonerUnrankedCard.stlyed";
import { FlexColCenter, FlexRowSpaceBetween, FlexRow } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { ImageContainer } from "../../atoms/ImageContainer/ImageContainer";
import { Span } from "../../atoms/Span/Span";

export const SummonerUnrankedCard = () => {

  return (
    <StyledSummonerUnrankedCards>
      <Span underline size="m">Incomplete Placements</Span>
      <FlexRowSpaceBetween>
        <FlexRow gap="1rem">
          <ImageContainer
            src="https://static.u.gg/assets/lol/ranks/2d/unranked.svg"
            alt="Ranked tier"
            width="65px"
          />
          <FlexColCenter gap="0.2rem">
            <Span size="m">Unranked</Span>
            <Span size="s">0 LP</Span>
          </FlexColCenter>
        </FlexRow>
        <FlexColCenter gap="0.2rem">
          <Span align="right" size="s">0W 0L</Span>
          <Span align="right" size="s">0%</Span>
        </FlexColCenter>
      </FlexRowSpaceBetween>
    </StyledSummonerUnrankedCards>
  );
};
