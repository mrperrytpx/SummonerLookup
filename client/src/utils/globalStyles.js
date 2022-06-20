import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        height: 100vh;
    }

    html, body {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
    }

    body {
        background-color: #371B58;
        line-height: 1.5;
        color: black;
        height: 100%;

    }

    input, button, textarea, select {
        font: inherit;
    }

    img, picture, video, canvas {
        display: block;
        max-width: 100%;
    }
`;

export default GlobalStyles;