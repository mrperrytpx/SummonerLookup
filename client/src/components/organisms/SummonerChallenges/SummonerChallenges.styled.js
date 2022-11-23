import styled from "styled-components";

export const StyledSummonerChallenges = styled.div`
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 10px;
    display: grid;
    grid-template-columns: 250px 1fr;

    aside {
        display: flex;
        flex-direction:column;
        gap: 1rem;
        padding: .5rem;
    }

    & > div {
        display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        justify-content: center;
        gap: 0.5rem;
        padding: .5rem 0;
    }
`;