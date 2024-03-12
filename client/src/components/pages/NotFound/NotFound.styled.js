import { bodyHeight } from "consts/cssVals";
import styled from "styled-components";

export const StyledNotFound = styled.main`
    min-height: ${bodyHeight};

    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`;
