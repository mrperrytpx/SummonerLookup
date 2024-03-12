import { StyledSvgLink } from "./SvgLink.styled";

export const SvgLink = ({ to, children, onClick }) => {
    return (
        <StyledSvgLink onClick={onClick ? onClick : null} to={to}>
            {children}
        </StyledSvgLink>
    );
};
