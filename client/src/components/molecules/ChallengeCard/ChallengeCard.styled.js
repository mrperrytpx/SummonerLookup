import { FlexCol, FlexColCenter } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledChallengeCard = styled(FlexColCenter)`
    border: 5px solid ${({ theme, tier }) => theme.category[tier.toLowerCase()]};
    padding: .75rem;
    gap: 1rem;
    border-radius: 20px;
    box-shadow: 0 0 0 1px ${({ theme, tier }) => theme.category[tier.toLowerCase()]};

    span {
        text-align: center;
    }
`;