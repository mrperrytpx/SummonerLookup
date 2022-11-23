import { Span } from "components/atoms/Span/Span";
import { useQueryClient } from "react-query";
import { StyledChallengeCard } from "./ChallengeCard.styled";

export const ChallengeCard = ({ challenge }) => {

  const queryClient = useQueryClient();
  const challenges = queryClient.getQueryData(["challenges"]);

  const challengeData = challenges.find(chal => chal.id === challenge.challengeId);

  return (
    <StyledChallengeCard>
      <Span>{challengeData?.name}</Span>
    </StyledChallengeCard>
  );
};
