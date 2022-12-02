import styled from "styled-components";
import { FlexColStart } from "../FlexBoxes/FlexBoxes.styled";

export const StyledContainer = styled(FlexColStart)`
  width: 100%;
  min-height: ${({ height }) => height || "auto"};
  padding: 1.5rem;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${({ theme, bg }) => bg && theme.backgroundColors.secondary};
`;