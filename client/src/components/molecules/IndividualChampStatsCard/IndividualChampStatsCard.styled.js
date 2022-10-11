import styled from "styled-components";
import { FlexRow, FlexRowSpaceBetween } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledIndividualChampStatsCard = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    padding: 0.5rem 0;
    border-top: 1px solid ${({ theme }) => theme.backgroundColors.active};
    width: 100%;

    img {
        width: 40px;
        aspect-ratio: 1 / 1;
    }
`; 