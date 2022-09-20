import styled from "styled-components";

export const StyledExpandingMenu = styled.div`
    span {
        display: flex;
        align-items: center;
        justify-content: start;
        color: white;
        vertical-align: middle;
        border-bottom: 2px solid white;
        padding: 0.5rem 0;
        cursor: pointer;
        user-select: none;

        svg {
            padding: 0.1rem;
            margin-right: 0.2em;
            rotate: ${({ isExpanded }) => isExpanded ? "90deg" : "0deg"};
            transition: rotate 0.1s linear;
        }
    }
    
    p {
        color: white;
    }

    margin-bottom: 2rem;
`;