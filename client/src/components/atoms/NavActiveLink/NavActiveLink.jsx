import { StyledNavActiveLink } from "./NavActiveLink.styled";

export const NavActiveLink = ({ active, children, to }) => {
    return (
        <StyledNavActiveLink active={active} to={to}>
            {children}
        </StyledNavActiveLink>
    );
};
