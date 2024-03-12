import styled from "styled-components";
import { FlexColStart } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSignInUpForm = styled(FlexColStart).attrs({ as: "form" })`
    padding: 1.5rem 1rem;
    margin-top: 1rem;

    & > :last-child {
        margin-top: 1rem;
    }
`;
