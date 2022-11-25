import { StyledFooter } from "./Footer.styled";
import { Disclaimer } from "../../atoms/Disclaimer/Disclaimer";
import { IconButtonLink } from "../../atoms/IconButtonLink/IconButtonLink";
import { LinkButtonCluster } from "../../molecules/LinkButtonCluster/LinkButtonCluster";

export const Footer = () => {
  return (
    <StyledFooter>
      <Disclaimer />
      <LinkButtonCluster>
        <IconButtonLink icon="github" />
        <IconButtonLink icon="linkedin" />
      </LinkButtonCluster>
    </StyledFooter>
  );
};
