import { Span } from "components/atoms/Span/Span";
import { StyledChallengeCategory } from "./ChallengeCategory.styled";

export const ChallengeCategory = ({ isActive, category, data, onClick }) => {

  return (
    <StyledChallengeCategory isActive={isActive} points={data.current} maxPoints={data.max} onClick={onClick}>
      <Span size="sm" align="center"><b>{category.name}</b></Span>
      <div data-progress>
        <div></div>
      </div>
      <Span size="s" align="center">{data.current} out of {data.max} pts</Span>
    </StyledChallengeCategory >
  );
};
