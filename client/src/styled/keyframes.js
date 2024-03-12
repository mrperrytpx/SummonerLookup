import { keyframes } from "styled-components";

export const jump = keyframes`
    0% {
        transform: translateY(0%);
    }

    50% {
        transform: translateY(-4px);
    }

    100% {
        transform: translateY(0%);
    }
`;

export const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
