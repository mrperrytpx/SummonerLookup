import { StyledImageContainer } from "./ImageContainer.styled";

export const ImageContainer = ({ border, radius, src, alt, width, background, max, min }) => {
  return (
    <StyledImageContainer
      min={min}
      border={border}
      max={max}
      background={background}
      width={width}
      radius={radius}
    >
      <img src={src} alt={alt} />
    </StyledImageContainer>
  );
};
