import styled from "styled-components";

export const StyledSummonerMatchCard = styled.div`
    padding: .5rem;
    border: 1px solid ${({ theme, isWin }) => isWin ? theme.matchResult.win : theme.matchResult.loss};
    border-radius: 8px;
    box-shadow: 0px 1px 1px ${({ theme, isWin }) => isWin ? theme.matchResult.win : theme.matchResult.loss};

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;

    background-color: ${({ isWin, theme }) => isWin ? theme.matchResult.win : theme.matchResult.loss};
    
`;