import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledSummonerMatches = styled(FlexCol)`
    align-self: start;
    width: 100%;
    padding: 1rem;
    gap: 0.3rem;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 1rem;

    & > div:first-of-type {
        margin-top: 0.5rem;
        ${({ noMatches }) =>
            noMatches &&
            `
            min-height: 150px;
        `}
    }
`;
