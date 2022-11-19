import styled from "styled-components";
import { FlexCol } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerRankCard = styled(FlexCol)`
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 1rem;
    gap: 0.5rem;
    max-width: 480px;
    place-self: center;
`;