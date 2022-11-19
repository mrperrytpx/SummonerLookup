import { StyledContainer } from "./Container.styled";

export const Container = ({ children, ...rest }) => {
  return (
    <StyledContainer {...rest}>
      {children}
    </StyledContainer>
  );
};
