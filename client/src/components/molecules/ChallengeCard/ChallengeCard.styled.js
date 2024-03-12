import styled from "styled-components";

export const StyledChallengeCard = styled.div`
    border-bottom: 3px solid ${({ theme, tier }) => theme.category[tier.toLowerCase()]};
    border-radius: 10px;
    background-color: ${({ theme, tier }) => `${theme.category[tier.toLowerCase()]}90`};
    padding: 0.5rem;
    width: 100%;
    gap: 1rem;
    box-shadow: 1px 1px 1px 1px ${({ theme, tier }) => theme.category[tier.toLowerCase()]};

    [data-info] {
        width: 100%;
    }

    ${({ isVisible }) =>
        !isVisible &&
        `

        [data-challenge-badge] {
            visibility: hidden;
        }

        img {
            visibility: hidden;
        }
    `}

    img[alt="Challenge badge"] {
        place-self: start;
    }
`;
