import styled from "styled-components";

export const StyledNavbar = styled.nav`
    display: flex;
    height: 80px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 2px solid ${(props) => props.theme.backgroundColors.tertiary};
    margin-bottom: 1rem;
`;