import styled from "styled-components";
import { FlexColStart } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledMobileMenu = styled(FlexColStart)`
    opacity: 1;
    position: absolute;
    min-height: 100vh;
    inset: 0px;
    width: 100vw;
    gap: 3rem;
    margin-top: calc(80px + 1rem);
    border: ${({ theme }) => theme.backgroundColors.active};
    background-color: ${({ theme }) => theme.backgroundColors.primary};
    z-index: 9999;
`;