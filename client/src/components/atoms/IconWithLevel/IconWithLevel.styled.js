import styled from "styled-components";
import { FlexColCenter } from "../FlexBoxes/FlexBoxes.styled";

export const StyledIconWithLevel = styled(FlexColCenter)`
    position: relative;
    width: ${({ width }) => width + "px"};
    height: ${({ width }) => width + "px"};
    aspect-ratio: 1 / 1;
    margin: 0;

    img {
        width: 100%;
        aspect-ratio: 1 / 1;
        &[alt] {
            font-size: 0.6rem;
        }
    }

    span {
        display: inline-block;
        position: absolute;
        bottom: 0; 
        right: 0;
        font-size: ${({ width }) => width > 100 ? "0.8rem" : "0.65rem"};
        
        background-color: ${({ theme }) => theme.backgroundColors.primary};
        color: ${({ theme }) => theme.textColors.light};
        
        padding: 0.1rem 0.15rem;
    }   
`;