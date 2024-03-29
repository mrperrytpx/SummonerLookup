import styled from "styled-components";

export const StyledFollowingList = styled.div`
    padding: 1rem;
    padding-left: 0;

    @media only screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem 0.1rem 0.1rem 0.1rem;
        gap: 0.5rem;
    }
`;
