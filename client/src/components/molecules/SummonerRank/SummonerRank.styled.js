import styled from "styled-components";
import { FlexRowSpaceBetween } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerRank = styled(FlexRowSpaceBetween)`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 1rem;
`;