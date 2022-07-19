import styled from "styled-components";
import { FlexRowSpaceBetween } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledNavbar = styled(FlexRowSpaceBetween)`
    height: 80px;
    width: 100%;
    padding: 1rem;
    border-bottom: 2px solid ${(props) => props.theme.backgroundColors.tertiary};
    margin-bottom: 1rem;
`;