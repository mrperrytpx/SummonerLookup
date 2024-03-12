import styled from "styled-components";
import { Span } from "../Span/Span";

export const StyledGameTimer = styled(Span)`
    width: 100%;

    @media only screen and (max-width: 775px) {
        width: min(500px, 98%);
        margin: 0 auto;
    }
`;
