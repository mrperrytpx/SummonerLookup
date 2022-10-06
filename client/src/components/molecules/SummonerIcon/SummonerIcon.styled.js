import styled from "styled-components";
import { FlexColCenter } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerIcon = styled(FlexColCenter)`
    position: relative;
    width: 180px;
    margin: 0;
    border: 1px solid ${({ theme }) => theme.backgroundColors.active};

    img {
        width: 100%;
        aspect-ratio: 1 / 1;
    }

    span {
        display: inline-block;
        position: absolute;
        bottom: 0; 
        right: 0;
        
        border-top: 1px solid ${({ theme }) => theme.backgroundColors.active};
        border-left: 1px solid ${({ theme }) => theme.backgroundColors.active};
        background-color: ${({ theme }) => theme.backgroundColors.primary};
        color: ${({ theme }) => theme.textColors.light};
        
        padding: 0.2rem 0.3rem;
    }   

`;