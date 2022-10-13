import { useScreenSize } from "hooks/useScreenSize";
import { StyledSummonerMatchCard } from "./SummonerMatchCard.styled";

export const SummonerMatchCard = ({ match }) => {

  const { width } = useScreenSize();

  return (
    <StyledSummonerMatchCard>
      {JSON.stringify(match?.info?.gameName, null, 2)}
    </StyledSummonerMatchCard>
  );
};

// Game-type
// result time

// champ icon with a level
// summoners, runes

// K D A
// CS (CS/M)
// VS

// items + trinket

// blue team
// red team

// exand button

// grid
// 	div
// 		span
// 		span
// 	div

// 	div
// 		div relative
// 			img
// 			div absolute
// 		div
// 		div grid
// 			img
// 			img
// 			img
// 			img
// 		div
// 	div

// 	div flex col center
// 		span
// 		span
// 		span
// 	div

// 	div grid 4 3
// 		img x7
// 	div
	
// 	div col start
// 		div
// 			img span x5
// 		div
// 	div

// 	div col start
// 		div
// 			img span x5
// 		div
// 	div

// 	div col end
// 		button
// 	div