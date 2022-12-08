import styled from "styled-components";
import { FlexRowCenter } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledFooter = styled(FlexRowCenter).attrs({ as: "footer" })`
    background-color: ${({ theme }) => theme.backgroundColors.primary};
    border-top: 1px solid ${({ theme }) => theme.backgroundColors.quaternary};
    padding: 2rem 5rem 2rem 4rem;

    @media only screen and (max-width: ${({ theme }) => theme.resolutions.tablet}) {
        flex-direction: column;
    }
`;