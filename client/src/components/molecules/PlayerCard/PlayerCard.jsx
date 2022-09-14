import { StyledPlayerCard } from "./PlayerCard.styled";


export const PlayerCard = ({ player }) => {
  return (
    <StyledPlayerCard>
      <p style={{ color: "white" }}>{JSON.stringify(player, null, 2)}</p>
    </StyledPlayerCard>
  );
};
