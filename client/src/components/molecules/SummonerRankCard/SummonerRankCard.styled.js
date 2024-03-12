import styled from "styled-components";
import { FlexCol } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerRankCard = styled(FlexCol)`
    place-self: center;
    width: 100%;
    max-width: 480px;
    padding: 1rem;
    gap: 1rem;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 1rem;
`;
