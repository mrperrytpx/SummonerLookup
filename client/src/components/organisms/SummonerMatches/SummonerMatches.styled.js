import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledSummonerMatches = styled(FlexCol)`
    gap: 0.3rem;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    padding: 1rem;
    border-radius: 1rem;
    width: 100%;
    align-self: start;

    & > div:first-of-type {
        margin-top: .5rem;
        ${({ noMatches }) => noMatches && `
            min-height: 150px;
        `}
    }
`;