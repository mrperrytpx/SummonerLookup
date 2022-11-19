import { StyledImageContainer } from "./ImageContainer.styled";

export const ImageContainer = ({ border, radius, src, alt, width, background, ...rest }) => {
  return (
    <StyledImageContainer
      {...rest}
      border={border}
      background={background}
      width={width}
      radius={radius}
    >
      <img src={src} alt={alt} />
    </StyledImageContainer>
  );
};
