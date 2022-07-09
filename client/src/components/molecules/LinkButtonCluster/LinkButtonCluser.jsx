import { LinkButton } from "../../atoms/LinkButton/LinkButton";
import { StyledLinkButtonCluster } from "./LinkButtonCluser.styled";

export const LinkButtonCluser = () => {
  return (
    <StyledLinkButtonCluster>
      <LinkButton variant="quaternary" href="/signin">Sign in</LinkButton>
      <LinkButton variant="quaternary" href="/signup">Sign up</LinkButton>
    </StyledLinkButtonCluster>
  );
};
