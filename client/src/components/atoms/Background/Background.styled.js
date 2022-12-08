import styled from "styled-components";

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
            background-image: url('https://raw.communitydragon.org/latest/game/assets/characters/jhin/skins/skin05/jhinloadscreen_5.png');
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            inset: 0;
            opacity: 0.15;
        }
    `}
`;