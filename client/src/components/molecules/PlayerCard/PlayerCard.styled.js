import styled from "styled-components";

export const StyledPlayerCard = styled.div`

    margin: 1rem 1rem 1rem 0;
    display: inline-block;
    padding: 1rem;

    border: 1px solid white;
    border-radius: 10px;
    box-shadow: 0 0 2px 0px white inset, 0 0 2px 0px white;
    color: ${({ theme }) => theme.textColors.light};

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.textColors.light};
        margin-right: 1rem;
        font-size: 1.1rem;

        div {
            display: inline-block;
        }
    }
    
    &:hover {
        border: 1px solid ${({ theme }) => theme.backgroundColors.quaternary};
    }
`;