import styled from "styled-components";
import { FlexColStart } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { navHeight } from "consts/cssVals";

export const StyledMobileMenu = styled(FlexColStart)`
    position: absolute;
    inset: 0px;
    min-height: 100vh;
    width: 100vw;
    margin-top: ${navHeight};
    gap: 2rem;
    opacity: 1;
    border: ${({ theme }) => theme.backgroundColors.active};
    background-color: ${({ theme }) => theme.backgroundColors.primary};
    z-index: 9999;
`;
