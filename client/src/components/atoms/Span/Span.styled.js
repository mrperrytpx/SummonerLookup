import styled from "styled-components";

const spanSize = (size) => {
    switch (size) {
        case "xs": {
            return ".5rem";
        }
        case "s": {
            return ".75rem";
        }
        case "m": {
            return "1rem";
        }
        case "l": {
            return "1.25rem";
        }
        case "xl": {
            return "1.5rem";
        }
        case "xxl": {
            return "1.75rem";
        }
        case "xxxl": {
            return "2rem";
        }
        default: {
            return "1rem";
        }
    }
};

export const StyledSpan = styled.span`
    width: 100%;
    color: ${({ theme }) => theme.textColors.light};
    font-size: ${({ size }) => spanSize(size)};
    text-transform: ${({ capsed }) => capsed ? "uppercase" : "none"};
    text-align: ${({ align }) => align};
    border-bottom: ${({ underline }) => underline ? "1px solid white" : ""};
    ${({ pointer }) => pointer && `
        cursor: pointer;
    `}
    ${({ padding }) => padding && `
        padding: ${padding};
    `}
`;