import { StyledBackground } from "./Background.styled";
import bg from "../../../assets/background.webm";

export const Background = ({ children }) => {
  return (
    <StyledBackground>
      <video autoPlay muted loop data-background>
        <source type="video/webm" src={bg} />
      </video>
      {children}
    </StyledBackground>
  );
};
