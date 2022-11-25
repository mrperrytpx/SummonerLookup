import styled from "styled-components";
import { FlexRowStart } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerNavbar = styled(FlexRowStart)`
    color: ${({ theme }) => theme.textColors.light};

    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 10px;

    &:webkit-scrollbar {
        width: 5px;
        background-color: red;
    }
    margin: 1rem 0;
    
    a:hover {
        color: ${({ theme }) => theme.backgroundColors.quaternary};
    }

    @media only screen and (max-width: 420px) {
        overflow-x: scroll;
        height: auto;

        ::-webkit-scrollbar {
            height: 5px;
            width: 5px;
            border-radius: 50%;
        }
        ::-webkit-scrollbar-track {
            background: ${({ theme }) => theme.backgroundColors.secondary};
        }
        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.backgroundColors.tertiary};
            border-radius: 10px;
        }
        ::-webkit-scrollbar-track-piece {
        }

    }
`;