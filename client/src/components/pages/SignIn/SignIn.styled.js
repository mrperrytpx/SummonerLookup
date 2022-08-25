import styled from "styled-components";

export const StyledSignIn = styled.main`
    margin: auto;

    section {
        margin: 5rem auto;
        width: min(450px, 95%);
        background-color: ${({ theme }) => theme.backgroundColors.secondary};

        @media only screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
            margin: 1rem auto;
            background-color: ${({ theme }) => theme.backgroundColors.primary};
        }
    }

`;

