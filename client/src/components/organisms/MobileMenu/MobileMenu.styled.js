import styled from "styled-components";
import { FlexColStart } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledMobileMenu = styled(FlexColStart)`
    opacity: 1;
    position: absolute;
    min-height: calc(100vh - 80px - 1rem);
    inset: 0px;
    width: 100vw;
    gap: 3rem;
    margin-top: calc(80px + 1rem);
    border: ${({ theme }) => theme.backgroundColors.active};
    background-color: ${({ theme }) => theme.backgroundColors.primary};
`;