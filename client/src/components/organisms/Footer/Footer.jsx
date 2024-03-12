import { StyledFooter } from "./Footer.styled";
import { Disclaimer } from "../../atoms/Disclaimer/Disclaimer";
import { IconButtonLink } from "../../atoms/IconButtonLink/IconButtonLink";
import { LinkButtonCluster } from "../../molecules/LinkButtonCluster/LinkButtonCluster";
import { FlexRowCenter } from "components/atoms/FlexBoxes/FlexBoxes.styled";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexRowCenter id="footer-wrapper">
                <Disclaimer />
                <LinkButtonCluster>
                    <IconButtonLink icon="github" />
                </LinkButtonCluster>
            </FlexRowCenter>
        </StyledFooter>
    );
};
