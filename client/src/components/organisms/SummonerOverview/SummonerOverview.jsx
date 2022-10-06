import { SummonerRank } from "../../molecules/SummonerRank/SummonerRank";
import { StyledSummonerOverview } from "./SummonerOverview.styled";
import styled from "styled-components";
import { FlexCol } from "../../atoms/FlexBoxes/FlexBoxes.styled";

const StyledFlexColOne = styled(FlexCol)`
  flex: 1;
  border: 1px solid white;
`;

const StyledFlexColTwo = styled(FlexCol)`
  flex: 2;
  border: 1px solid white;
`;


export const SummonerOverview = () => {
  return (
    <StyledSummonerOverview>
      <StyledFlexColTwo>
        <div style={{ color: "white" }}>DICK</div>
      </StyledFlexColTwo>
      <StyledFlexColOne>
        <SummonerRank />
      </StyledFlexColOne>
    </StyledSummonerOverview>
  );
};
