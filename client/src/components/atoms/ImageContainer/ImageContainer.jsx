import { StyledImageContainer } from "./ImageContainer.styled";

export const ImageContainer = ({ children, width }) => {
  return (
    <StyledImageContainer width={width}>
      {children}
    </StyledImageContainer>
  );
};
