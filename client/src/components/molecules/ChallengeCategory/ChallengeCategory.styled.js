import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledChallengeCategory = styled(FlexCol)`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid ${({ bg, theme }) => theme.category[bg][1] || theme.backgroundColors.active};
    background-color: ${({ bg, theme }) => theme.category[bg][0] || theme.backgroundColors.tertiary};

    padding: .25rem 0;
`;