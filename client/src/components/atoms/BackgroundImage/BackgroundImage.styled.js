import styled from "styled-components";

export const StyledBackgroundImage = styled.div`
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
`;