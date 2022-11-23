import { Span } from "components/atoms/Span/Span";
import { StyledChallengeCategory } from "./ChallengeCategory.styled";
import { SERVER_VALUES } from "consts/serverValues";
import { useParams } from "react-router-dom";

// (better than {+((1 - summonerChallengesData?.totalPoints?.percentile) * 100).toFixed(2)}% of {SERVER_VALUES[server]})


export const ChallengeCategory = ({ category, data, onClick }) => {

  const { server } = useParams();

  return (
    <StyledChallengeCategory onClick={onClick}>
      <Span size="sm" align="center">{category.name}</Span>
      <Span size="s" align="center">{data.current} out of {data.max} pts</Span>
      <Span size="s" align="center">(better than {+((1 - data?.percentile) * 100).toFixed(2)}% of {SERVER_VALUES[server]})</Span>
    </StyledChallengeCategory >
  );
};
