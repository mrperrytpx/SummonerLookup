import styled from "styled-components";
import { FlexRowSpaceBetween } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledNavbar = styled(FlexRowSpaceBetween).attrs({ as: "nav" })`

    width: 100%;
    min-height: 80px;

    padding: 0 1rem;
    margin: auto auto 1rem auto;
    position: relative;
    gap: 1rem;

    & > svg {
        place-self: center end;
    }

    border-bottom: 1px solid ${({ theme }) => theme.backgroundColors.quaternary};

    @media only screen and (min-width: ${({ theme }) => theme.resolutions.widescreen}) {
        justify-content: space-evenly;
    }

    @media only screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
        ${({ isNavOpen }) => isNavOpen && `
            flex-direction: row-reverse;
        `}
        padding: 0.5rem 1rem;
    }
`;