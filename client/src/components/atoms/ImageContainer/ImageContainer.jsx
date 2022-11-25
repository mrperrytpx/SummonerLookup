import { StyledImageContainer } from "./ImageContainer.styled";

export const ImageContainer = ({ border, radius, src, alt, width, background, children, ...rest }) => {

  return (
    <StyledImageContainer
      {...rest}
      border={border}
      background={background}
      width={width}
      radius={radius}
    >
      {children}
      <img src={src} alt={alt} />
    </StyledImageContainer>
  );
};
