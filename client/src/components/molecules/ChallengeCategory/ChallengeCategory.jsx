import { Span } from "components/atoms/Span/Span";
import { StyledChallengeCategory } from "./ChallengeCategory.styled";
import { SERVER_VALUES } from "consts/serverValues";
import { useParams } from "react-router-dom";

// (better than {+((1 - summonerChallengesData?.totalPoints?.percentile) * 100).toFixed(2)}% of {SERVER_VALUES[server]})


export const ChallengeCategory = ({ category, name, onClick }) => {

  const { server } = useParams();

  return (
    <StyledChallengeCategory onClick={onClick} bg={category.level.toLowerCase()}>
      <Span size="m" align="center">{name}</Span>
      <Span size="s" align="center">{category.current} out of {category.max} challenge pts</Span>
      <Span size="s" align="center">(better than {+((1 - category.percentile) * 100).toFixed(2)}% of {SERVER_VALUES[server]})</Span>
    </StyledChallengeCategory>
  );
};
