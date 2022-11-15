import styled from "styled-components";
import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerLiveGame = styled(FlexCol)`
    margin: 2rem 0;
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 15px;
`;