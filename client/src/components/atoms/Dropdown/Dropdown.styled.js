import styled from "styled-components";
import { FlexColCenter } from "../FlexBoxes/FlexBoxes.styled";

export const StyledDropdown = styled(FlexColCenter)`
    width: auto;
    color: black;
    background-color: ${({ theme }) => theme.backgroundColors.active};
    user-select: none;
    position: relative;
    border-radius: 5px;
    
    span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: .25rem .5rem;
        border-radius: 5px;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 600;
    }

    & > div {
        width: 100%;
        min-width: 150px;
        background-color: ${({ theme }) => theme.backgroundColors.active};
        position: absolute;
        top: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 0 0 5px 5px;

        ${({ from }) => from && `
            ${from}: 0;
        `};

        span {
            z-index: 10;
            background-color: ${({ theme }) => theme.backgroundColors.active};
            display: inline-block;
            width: 100%;
            text-align: left;
            padding: .25rem .5rem;
            cursor: pointer;

            &:hover {
                background-color: ${({ theme }) => theme.backgroundColors.tertiary};
                color: ${({ theme }) => theme.textColors.light};
            }
        }
    }
`;
