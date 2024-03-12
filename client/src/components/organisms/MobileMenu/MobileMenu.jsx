import { StyledMobileMenu } from "./MobileMenu.styled";
import { Button } from "../../atoms/Button/Button";
import { Disclaimer } from "../../atoms/Disclaimer/Disclaimer";
import { IconButtonLink } from "../../atoms/IconButtonLink/IconButtonLink";
import { LinkButton } from "../../atoms/LinkButton/LinkButton";
import { SvgLink } from "../../atoms/SvgLink/SvgLink";
import { LinkButtonCluster } from "../../molecules/LinkButtonCluster/LinkButtonCluster";
import { useAuth } from "../../../hooks/useAuth";
import { ReactComponent as TextLogo } from "../../../assets/text_logo_no_square.svg";
import { ReactComponent as SquareLogo } from "../../../assets/square_logo_no_text.svg";
import { useScreenSize } from "hooks/useScreenSize";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";

export const MobileMenu = ({ setIsNavOpen }) => {
    const { signOut, accessToken } = useAuth();
    const { width } = useScreenSize();

    const handleLogout = async (e) => {
        e.preventDefault();
        await signOut.mutateAsync({ accessToken });
        setIsNavOpen(false);
    };

    return (
        <StyledMobileMenu>
            {width <= 449 && (
                <SvgLink to="/">
                    {width <= 320 ? (
                        <SquareLogo width="80" style={{ marginTop: "2rem" }} fill="white" />
                    ) : (
                        <TextLogo style={{ marginTop: "2rem" }} fill="white" />
                    )}
                </SvgLink>
            )}
            <LinkButtonCluster width={width} variant="mobile">
                {accessToken ? (
                    <LinkButton minwidth="120px" variant="quaternary" to="/me">
                        Profile
                    </LinkButton>
                ) : (
                    <LinkButton minwidth="120px" variant="quaternary" to="/signin">
                        Sign in
                    </LinkButton>
                )}
                {accessToken ? (
                    <Button minwidth="120px" onClick={(e) => handleLogout(e)} variant="danger">
                        {signOut.isLoading ? <LoadingIndicator size="28px" variant="white" /> : "Sign Out"}
                    </Button>
                ) : (
                    <LinkButton minwidth="120px" variant="quaternary" to="/signup">
                        Sign up
                    </LinkButton>
                )}
            </LinkButtonCluster>
            <LinkButtonCluster>
                <IconButtonLink size="46" icon="github" />
            </LinkButtonCluster>
            <Disclaimer />
        </StyledMobileMenu>
    );
};
