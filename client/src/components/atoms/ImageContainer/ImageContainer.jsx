import { StyledImageContainer } from "./ImageContainer.styled";

export const ImageContainer = ({ border, src, alt, width, background, max, min }) => {
  return (
    <StyledImageContainer min={min} border={border} max={max} background={background} width={width}>
      <img src={src} alt={alt} />
    </StyledImageContainer>
  );
};
