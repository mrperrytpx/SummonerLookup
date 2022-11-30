import { StyledBackgroundImage } from "./BackgroundImage.styled";
import bg from "../../../assets/background.webm";

export const BackgroundImage = ({ children }) => {
  return (
    <StyledBackgroundImage>
      <video autoPlay muted loop data-background>
        <source type="video/webm" src={bg} />
      </video>
      {children}
    </StyledBackgroundImage>
  );
};
