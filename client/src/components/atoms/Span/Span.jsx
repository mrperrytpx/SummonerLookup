import { StyledSpan } from "./Span.styled";

export const Span = ({ align = "left", block = false, children, capsed = false, size = "m" }) => {
  return (
    <StyledSpan align={align} block={block} size={size} capsed={capsed}>
      {children}
    </StyledSpan>
  );
};
