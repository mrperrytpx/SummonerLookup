import { StyledLinkButtonCluster } from "./LinkButtonCluster.styled";

export const LinkButtonCluster = ({ children, variant, border, ...rest }) => {

  return (
    <StyledLinkButtonCluster {...rest} border={border} variant={variant}>
      {children}
    </StyledLinkButtonCluster>
  );
};