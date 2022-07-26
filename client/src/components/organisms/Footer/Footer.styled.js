import styled from "styled-components";
import { FlexRowSpaceBetween } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledFooter = styled(FlexRowSpaceBetween).attrs({
    as: "footer"
})`
    background-color: ${({ theme }) => theme.backgroundColors.primary};
    border-top: 1px solid ${({ theme }) => theme.backgroundColors.quaternary};
    padding: 1rem;
    margin: auto;
    padding-bottom: 2rem;

    @media only screen and (min-width: 2400px) {
        justify-content: center;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;