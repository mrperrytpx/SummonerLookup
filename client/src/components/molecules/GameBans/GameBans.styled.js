import { FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledGameBans = styled(FlexRowStart)`
    gap: 1rem;
    color: white;
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    padding: 0.25rem;

    ${({ align }) => align && `
        justify-content: ${align};
    `}

    @media only screen and (max-width: 900px) {
        justify-content: ${({ align }) => align || "center"};
        img {
            width: 36px;
        }
    }
`;