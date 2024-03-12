import styled from "styled-components";
import { FlexRow } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { navHeight } from "consts/cssVals";

export const StyledNavbar = styled(FlexRow).attrs({ as: "nav" })`
    width: 100%;
    min-height: ${navHeight};

    #wrapper {
        width: 100%;
        max-width: 120rem;
        padding: 0 0.5rem;
        margin: 0 auto;

        @media only screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
            place-content: end;
        }
    }

    border-bottom: 1px solid ${({ theme }) => theme.backgroundColors.quaternary};
    position: relative;
`;
