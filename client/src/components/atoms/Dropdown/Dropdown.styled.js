import styled from "styled-components";
import { FlexColCenter } from "../FlexBoxes/FlexBoxes.styled";

export const StyledDropdown = styled(FlexColCenter)`
    user-select: none;
    width: auto;
    position: relative;
    color: ${({ theme }) => theme.textColors.dark};
    background-color: ${({ theme }) => theme.backgroundColors.active};
    border-radius: 5px;
    z-index: 2;

    span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.backgroundColors.active};
        width: 100%;
        height: 100%;
        min-width: 60px;
        padding: .25rem .5rem;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 600;
    }

    & > div {
        position: absolute;
        top: 100%;
        width: 100%;
        min-width: 150px;
        background-color: ${({ theme }) => theme.backgroundColors.active};
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
            background-color: ${({ theme }) => theme.backgroundColors.active};
            display: inline-block;
            width: 100%;
            padding: .25rem .5rem;
            text-align: left;
            cursor: pointer;

            &:hover {
                background-color: ${({ theme }) => theme.backgroundColors.tertiary};
                color: ${({ theme }) => theme.textColors.light};
            }
        }
    }
`;
