import { StyledSpan } from "./Span.styled";

export const Span = ({ children, capsed = false, fontSize = "0.75rem" }) => {
  return (
    <StyledSpan fontSize={fontSize} capsed={capsed}>
      {children}
    </StyledSpan>
  );
};
