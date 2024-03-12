import styled from "styled-components";
import { FlexColStart } from "../FlexBoxes/FlexBoxes.styled";

export const StyledDisclaimer = styled(FlexColStart)`
    gap: 1.5rem;

    padding: 2rem 1rem;

    p {
        text-align: left;
        width: 100%;
        font-size: 0.8rem;
        color: #cccccc;
        font-weight: 400;
        max-width: 1920px;
    }
`;
