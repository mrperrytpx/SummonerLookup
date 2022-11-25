import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledChallengeTooltip = styled(FlexCol)`
    visibility: hidden;
    position: absolute;
    top: 50px;
    left: 20px;
    min-width: 200px;
    border-radius: 5px;
    padding: .25rem .5rem;
    z-index: 2;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border: 4px solid ${({ rank, theme }) => theme.category[rank]};

    @media only screen and (max-width: 650px) {
        transform: translateX(-50%);
        min-width: 150px;
    }
`;