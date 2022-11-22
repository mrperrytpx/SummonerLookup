import styled from "styled-components";

export const StyledSummonerChallenges = styled.div`
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 10px;
    display: grid;
    grid-template-columns: 250px 1fr;

    aside {
        border-right: 2px solid ${({ theme }) => theme.backgroundColors.quaternary};
        display: flex;
        flex-direction:column;
        gap: 1rem;
        padding: .5rem;
    }
`;