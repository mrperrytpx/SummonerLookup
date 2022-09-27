import styled from "styled-components";

export const StyledDeleteAccount = styled.div`
    padding: 1rem;
    color: white;

    p {
        font-size: 1.1rem;
        margin-bottom: 1rem;

        code {
            background-color: ${({ theme }) => theme.backgroundColors.active};
            color: ${({ theme }) => theme.textColors.dark};
            padding: 0.2rem;
        }
    }

    form {
        display: flex;
        align-items: center;
        justify-content: start;

        input {
            margin-right: 1.5rem;
        }

    }

    @media only screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
            form {
                flex-direction: column;

                input {
                    width: 100%;
                    margin: 0 0 1rem 0;
                }

                button {
                    width: 100%;
                }
            }
        }
`;