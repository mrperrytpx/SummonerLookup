import { StyledSummonerRank } from "./SummonerRank.styled";
import { FlexColCenter } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { Span } from "../../atoms/Span/Span";
import { ImageContainer } from "../../atoms/ImageContainer/ImageContainer";
import { useGetSummonerRankedStatsQuery } from "../../../hooks/useGetSummonerRankedStatsQuery";
import { useParams } from "react-router-dom";
import { useGetSummonerQuery } from "../../../hooks/useGetSummonerQuery";

export const SummonerRank = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: summonerRankedData } = useGetSummonerRankedStatsQuery(server, summonerData?.summonerId);

  const winrate = ((summonerRankedData?.[0]?.wins / (summonerRankedData?.[0]?.wins + summonerRankedData?.[0]?.losses)) * 100).toFixed(2);

  return (
    <StyledSummonerRank>
      <ImageContainer width="60px">
        <img src={`https://static.u.gg/assets/lol/ranks/2d/${summonerRankedData?.[0]?.tier?.toLowerCase()}.svg`} alt="Ranked tier image" />
      </ImageContainer>
      <FlexColCenter>
        <Span size="m">{summonerRankedData?.[0]?.tier} {summonerRankedData?.[0]?.rank}</Span>
        <Span size="s">{summonerRankedData?.[0]?.leaguePoints} LP</Span>
      </FlexColCenter>

      <FlexColCenter>
        <Span align="right" size="s">{summonerRankedData?.[0]?.wins}W {summonerRankedData?.[0]?.losses}L</Span>
        <Span align="right" size="s">{winrate}%</Span>
      </FlexColCenter>
    </StyledSummonerRank>
  );
};
