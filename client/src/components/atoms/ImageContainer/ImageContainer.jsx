import { StyledImageContainer } from "./ImageContainer.styled";

export const ImageContainer = ({ src, alt, width, background, max }) => {
  return (
    <StyledImageContainer max={max} background={background} width={width}>
      <img src={src} alt={alt} />
    </StyledImageContainer>
  );
};
