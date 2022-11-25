import { FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledGameBans = styled(FlexRowStart)`
    gap: 1rem;
    width: 100%;
    padding: 0.25rem;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    color: white;

    ${({ align }) => align && `
        justify-content: ${align};
    `}

    @media only screen and (max-width: 900px) {
        justify-content: center;
        ${({ align, shouldMobileAlign }) => shouldMobileAlign && `
            justify-content: ${align};
        `}
        
        img {
            width: 36px;
        }
    }
`;