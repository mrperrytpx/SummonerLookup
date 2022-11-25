import styled from "styled-components";
import { FlexColStart } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledHome = styled(FlexColStart).attrs({ as: "main" })`
    justify-content: ${(props) => props.center ? "center" : "flex-start"};
    min-height: calc(100vh - 1rem - 120px); 
    margin: auto;
    margin-top: 3rem;
    gap: 2rem;

    @media only screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
        margin: 3rem auto;
        min-height: auto;
    }
`;