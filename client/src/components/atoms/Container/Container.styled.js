import styled from "styled-components";
import { FlexColCenter } from "../FlexBoxes/FlexBoxes.styled";

export const StyledContainer = styled(FlexColCenter)`
  width: 100%;
  height: ${({ height }) => height || "auto"};
  padding: 1.5rem;
  margin: auto;

  border-radius: 10px;
  background-color: ${({ theme, bg }) => bg && theme.backgroundColors.secondary};
`;