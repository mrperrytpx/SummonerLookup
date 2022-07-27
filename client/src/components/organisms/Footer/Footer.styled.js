import styled from "styled-components";
import { FlexRowCenter } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledFooter = styled(FlexRowCenter).attrs({
    as: "footer"
})`
    background-color: ${({ theme }) => theme.backgroundColors.primary};
    border-top: 1px solid ${({ theme }) => theme.backgroundColors.quaternary};
    padding: 1rem 1rem 2rem 1rem;

    @media only screen and (max-width: ${({ theme }) => theme.resolutions.tablet}) {
        flex-direction: column;
    }
`;