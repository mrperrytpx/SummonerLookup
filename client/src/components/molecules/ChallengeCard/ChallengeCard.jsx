import { Span } from "components/atoms/Span/Span";
import { useQueryClient } from "react-query";
import { StyledChallengeCard } from "./ChallengeCard.styled";

export const ChallengeCard = ({ capstone, challenge, solo }) => {

  const queryClient = useQueryClient();
  const challenges = queryClient.getQueryData(["challenges"]);

  const challengeData = challenges.find(chal => chal.id === challenge.challengeId);

  return (
    <StyledChallengeCard>
      {capstone ? <h1>{challengeData?.name}</h1> : null}
      <Span>{capstone ? "(Capstone)" : null}{challengeData?.name} ({solo ? "solo" : null})</Span>
    </StyledChallengeCard>
  );
};
