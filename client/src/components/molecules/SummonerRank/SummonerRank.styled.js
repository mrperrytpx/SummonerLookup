import styled from "styled-components";
import { FlexCol } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerRank = styled(FlexCol)`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 1rem;
    gap: 0.5rem;
`;