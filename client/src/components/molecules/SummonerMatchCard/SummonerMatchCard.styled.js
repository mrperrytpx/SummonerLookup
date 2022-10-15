import styled from "styled-components";

export const StyledSummonerMatchCard = styled.div`
    padding: .5rem;
    border: 1px solid ${({ theme, result }) => result ? theme.matchResult.win : theme.matchResult.loss};
    border-radius: 8px;
    box-shadow: 0px 1px 1px ${({ theme, result }) => result ? theme.matchResult.win + "40" : theme.matchResult.loss + "40"};

    display: grid;
    grid-template-columns: repeat(3, 1fr) 2fr;
    place-items: center;

    background-color: ${({ result, theme }) => result ? theme.matchResult.win : theme.matchResult.loss};
`;