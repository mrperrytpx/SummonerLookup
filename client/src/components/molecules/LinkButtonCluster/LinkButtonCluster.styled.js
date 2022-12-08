import styled from "styled-components";

export const StyledLinkButtonCluster = styled.div`
    display: flex;
    flex-direction: ${props => props.variant === "mobile" ? "column" : "row"};
    align-items: center;
    padding: ${props => props.variant === "mobile" ? "2rem 0" : ""};
    ${({ width }) => width <= 450 && `
            padding-top: 0; 
    `}
    gap: 1rem;
    width: ${props => props.variant === "mobile" ? "100%" : "auto"};
    border-bottom: ${props => props.variant === "mobile" ? "1px solid #758aab" : "none"};
`;