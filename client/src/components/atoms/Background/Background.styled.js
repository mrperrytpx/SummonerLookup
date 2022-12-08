import styled from "styled-components";
import img from "assets/background.webp";

export const StyledBackground = styled.div`
    position: absolute;
    overflow: hidden;
    inset: 0;
    z-index: -4;

    video {
        opacity: 0.3;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ${({ format }) => format === "image" && `
        &::before {
            content: "";
            background-image: url(${img});
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            inset: 0;
            opacity: 0.15;
        }
    `}
`;