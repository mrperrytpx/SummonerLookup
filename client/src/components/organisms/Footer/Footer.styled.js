import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.backgroundColors.primary};
    border-top: 1px solid ${({ theme }) => theme.backgroundColors.quaternary};

    width: 100%;
    #footer-wrapper {
        max-width: 120rem;
        width: 100%;
        margin: 0 auto;

        div:last-child {
            place-self: baseline;
            padding: 2rem 1rem;
        }
    }

    @media only screen and (max-width: ${({ theme }) => theme.resolutions.tablet}) {
        flex-direction: column;
    }
`;
