import { StyledSummonerMatchCard } from "./SummonerMatchCard.styled";

export const SummonerMatchCard = ({ match }) => {

  return (
    <StyledSummonerMatchCard>
      {JSON.stringify(match?.info?.gameName, null, 2)}
    </StyledSummonerMatchCard>
  );
};
