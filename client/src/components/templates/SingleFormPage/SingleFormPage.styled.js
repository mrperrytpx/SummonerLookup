import styled from "styled-components";

export const StyledSingleFormPage = styled.main`
    margin: auto;

    section {
        margin: 5rem auto;
        width: min(450px, 95%);
        background-color: ${({ theme }) => theme.backgroundColors.secondary};
        border-radius: 0rem 0rem 1rem 1rem;

        @media only screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
            margin: 1rem auto;
            background-color: ${({ theme }) => theme.backgroundColors.primary};
        }
    }
`;
