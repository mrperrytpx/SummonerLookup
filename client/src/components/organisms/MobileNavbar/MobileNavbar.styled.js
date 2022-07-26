import styled from "styled-components";
import { FlexColStart } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledMobileNavbar = styled(FlexColStart).attrs({ as: "main" })`
    height: calc(100vh - 80px - 1rem);
    width: 100vw;
    gap: 3rem;
`;