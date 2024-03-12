import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        min-height: 100vh;
        scroll-behavior: smooth;
    }

    html, body {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
    }

    body {
        background-color: ${({ theme }) => theme.backgroundColors.primary};
        line-height: 1.5;
        color: ${({ theme }) => theme.textColors.light};
        height: 100%;
        overflow-x: hidden;
        ${({ isNavOpen }) =>
            isNavOpen &&
            `
            overflow-y: hidden;
            touch-action: none;
        `}
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
        width: 100%;
        min-width: 100%;
    }

    a {
        color: white;
    }
`;

export default GlobalStyles;
