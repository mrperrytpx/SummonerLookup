import styled from "styled-components";
import { FlexColStart } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledMobileMenu = styled(FlexColStart)`
    position: absolute;
    inset: 0px;
    min-height: 100vh;
    width: 100vw;
    margin-top: 80px;
    gap: 3rem;
    opacity: 1;
    border: ${({ theme }) => theme.backgroundColors.active};
    background-color: ${({ theme }) => theme.backgroundColors.primary};
    z-index: 9999;
`;