import styled from "styled-components";
import { backgroundColor } from "../../../misc/backgroundColor";

export const StyledButton = styled.button`
    background-color: ${({ theme, variant }) => backgroundColor(theme, variant)};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: inline-block;
    height: 100%;
    min-width: 100px;
    width: min(${({ wide }) => wide ? "75%" : ""}, 200px);
    padding: .5em;
    border: none;

    color: ${({ theme }) => theme.textColors.light};
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;

    cursor: pointer;
`;