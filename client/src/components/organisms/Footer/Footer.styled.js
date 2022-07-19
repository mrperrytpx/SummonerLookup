import styled from "styled-components";
import { FlexRowSpaceBetween } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledFooter = styled(FlexRowSpaceBetween).attrs({
    as: "footer"
})`
    background-color: ${({ theme }) => theme.backgroundColors.primary};
    border-top: 1px solid ${({ theme }) => theme.backgroundColors.quaternary};
    padding: 1rem;
    max-width: 1920px;
    margin: auto;
`;