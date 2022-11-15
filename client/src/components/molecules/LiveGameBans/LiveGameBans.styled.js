import { FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledLiveGameBans = styled(FlexRowStart)`
    gap: 1rem;
    color: white;
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    padding: 0.5rem;

    ${({ align }) => align && `
        justify-content: flex-end;
    `}

    @media only screen and (max-width: 900px) {
        & {
            justify-content: center;
        }

        img {
            width: 36px;
        }
    }
`;