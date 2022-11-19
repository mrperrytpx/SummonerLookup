import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledSummonerUnrankedCards = styled(FlexCol)`
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 1rem;
    gap: 1rem;
    max-width: 480px;
    place-self: center;
`;