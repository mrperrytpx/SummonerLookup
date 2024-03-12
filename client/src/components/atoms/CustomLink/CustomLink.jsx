import { StyledCustomLink } from "./CustomLink.styled";

export const CustomLink = ({ to, children, ...rest }) => {
    return (
        <StyledCustomLink {...rest} to={to}>
            {children}
        </StyledCustomLink>
    );
};
