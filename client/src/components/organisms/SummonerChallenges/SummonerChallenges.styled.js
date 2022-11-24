import styled from "styled-components";

export const StyledSummonerChallenges = styled.div`
    border-radius: 10px;
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 1rem;

    aside {
        display: flex;
        flex-direction:column;
        gap: 1rem;
        padding: .5rem;
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
            border-radius: 10px 10px 0 0;

            background-color: ${({ theme }) => theme.backgroundColors.tertiary};
            flex-direction: row;
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
        }
    }
`;