import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledLiveGamePicks = styled(FlexCol)`
    color: white;
    width: 100%;

    [data-grid] {
        display: grid;
        grid-template-columns: 40px 160px 2fr 1fr;
        padding: .5rem;
        gap: 0.2rem;
        width: 100%;
        ${({ direction }) => direction && `direction: ${direction}`};

        span {
            place-self: center;
        }
    }
`;