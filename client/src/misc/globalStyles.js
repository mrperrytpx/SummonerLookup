import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        min-height: 100vh;
    }

    html, body {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
    }

    body {
        background-color: ${({ theme }) => theme.backgroundColors.primary};
        line-height: 1.5;
        color: ${({ theme }) => theme.textColors.dark};
        height: 100%;
        overflow-x: hidden;

    }

    input, button, textarea, select {
        font: inherit;
    }

    button {
        border: none;
    }

    img, picture, video, canvas {
        display: block;
        max-width: 100%;
    }
`;

export default GlobalStyles;