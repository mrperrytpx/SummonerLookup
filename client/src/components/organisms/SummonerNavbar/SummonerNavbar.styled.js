import styled from "styled-components";
import { FlexRowStart } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerNavbar = styled(FlexRowStart)`
    color: ${({ theme }) => theme.textColors.light};
    overflow-x: scroll;
    &::-webkit-scrollbar { /* Chrome */
        display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    margin: 0.7rem 0;
`;