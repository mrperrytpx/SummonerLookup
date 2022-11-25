import styled from "styled-components";
import { FlexRow } from "../FlexBoxes/FlexBoxes.styled";

export const StyledRememberMe = styled(FlexRow).attrs({ as: "label" })`
    width: min(200px, 100%);
    place-self: start;
    padding: 1rem 0;
    cursor: pointer;

    span {
        color: white;
    }

    input {
        appearance: none;
        cursor: pointer;

        width: 1.6rem;
        height: 1.6rem;
        margin-right: 0.7em;
        background-color: ${({ theme }) => theme.backgroundColors.active};

        &:checked {
            position: relative;

            &::before {
                position: absolute;
                content: "✔";
                right: 50%;
                top: -0.3125rem;
                transform: translateX(50%);
                color: ${({ theme }) => theme.backgroundColors.secondary};
                font-size: 1.5em;
            }
        }
    }
`;