import styled from "styled-components";

export const StyledChallengeCard = styled.div`
    border-bottom: 3px solid ${({ theme, tier }) => theme.category[tier.toLowerCase()]};
    background-color: ${({ theme, tier }) => `${theme.category[tier.toLowerCase()]}90`};
    padding: .5rem;
    border-radius: 10px;
    width: 100%;
    gap: 1rem;
    box-shadow: 1px 1px 1px 1px ${({ theme, tier }) => theme.category[tier.toLowerCase()]};

    [data-info] {
        width: 100%;
    }

`;