import styled from "styled-components";
import { FlexRowSpaceBetween } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { navHeight } from "consts/cssVals";

export const StyledNavbar = styled(FlexRowSpaceBetween).attrs({ as: "nav" })`
    width: 100%;
    min-height: ${navHeight};
    padding: 0 1rem;
    gap: 1rem;

    border-bottom: 1px solid ${({ theme }) => theme.backgroundColors.quaternary};
    position: relative;

    & > svg {
        place-self: center end;
    }

    @media only screen and (min-width: ${({ theme }) =>
            theme.resolutions.widescreen}) {
        justify-content: space-evenly;
    }

    @media only screen and (max-width: ${({ theme }) =>
            theme.resolutions.mobile}) {
        place-content: end;
    }
`;
