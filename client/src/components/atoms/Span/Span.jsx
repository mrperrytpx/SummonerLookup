import { StyledSpan } from "./Span.styled";

export const Span = ({ children, capsed = false, size = "m" }) => {
  return (
    <StyledSpan size={size} capsed={capsed}>
      {children}
    </StyledSpan>
  );
};
