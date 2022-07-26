import { StyledLinkButtonCluster } from "./LinkButtonCluster.styled";

export const LinkButtonCluster = ({ children, variant, border }) => {
  return (
    <StyledLinkButtonCluster border={border} variant={variant}>
      {children}
    </StyledLinkButtonCluster>
  );
};