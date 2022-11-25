import styled from "styled-components";

export const StyledSummonerChallenges = styled.div`
    position: sticky;
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 1rem;
    border-radius: 10px;

    aside {
        position: sticky;
        top: 0;
        max-height: 0;
        display: flex;
        flex-direction:column;
        gap: 1rem;
        padding: .5rem;
        width: 100%;
    }

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: .5rem 0;
    }

    margin-bottom: 10rem;

    @media only screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        gap: 1rem;

        aside {
            background-color: ${({ theme }) => theme.backgroundColors.tertiary};
            flex-direction: row;
            height: auto;
            max-height: 100%;
            overflow-x: scroll;

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
        }
    }
`;