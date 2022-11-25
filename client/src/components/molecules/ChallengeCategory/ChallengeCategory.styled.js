import { FlexColCenter } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledChallengeCategory = styled(FlexColCenter)`
    cursor: pointer;
    padding: 0.25rem 0;
    gap: 0.1rem;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 4px;
    min-width: 140px;

    ${({ isActive, theme }) => isActive && `
        outline: 3px solid ${theme.backgroundColors.active};
    `}

    [data-progress] {
        height: 8px;
        width: 80%;
        background-color: ${({ theme }) => theme.backgroundColors.quaternary};

        div {
            border-radius: 0 5px 5px 0;
            height: 8px;
            background-color:${({ theme }) => theme.backgroundColors.active};
            width: ${({ points, maxPoints }) => (points / maxPoints) * 100}%;
        }
    }
`;