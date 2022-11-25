import { StyledSpan } from "./Span.styled";

export const Span = ({ align = "left", underline = false, children, capsed = false, size = "m", ...rest }) => {

  return (
    <StyledSpan
      {...rest}
      underline={underline}
      align={align}
      size={size}
      capsed={capsed}
    >
      {children}
    </StyledSpan>
  );
};
