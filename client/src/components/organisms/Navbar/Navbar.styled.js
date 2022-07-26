import styled from "styled-components";
import { FlexRowSpaceBetween } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledNavbar = styled(FlexRowSpaceBetween)`
    width: 100%;
    min-height: 80px;

    padding: 1rem;
    margin: auto;
    margin-bottom: 1rem;

    border-bottom: 1px solid ${({ theme }) => theme.backgroundColors.quaternary};

    @media only screen and (min-width: 2400px) {
        justify-content: center;
        gap: 20rem;
        
    }

    @media only screen and (max-width: 600px) {
        padding: 0.5rem 1rem;
    }
`;