import styled from "styled-components";
import { FlexRow } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerOverview = styled(FlexRow)`
    color: ${({ theme }) => theme.textColors.light};
    gap: 0.75rem;
    margin-bottom: 150px;
`;