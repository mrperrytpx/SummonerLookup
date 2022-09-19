import { StyledPlayerList } from "./PlayerList.styled";

export const PlayerList = ({ children }) => {
  return (
    <StyledPlayerList>
      {children}
    </StyledPlayerList>
  );
};
