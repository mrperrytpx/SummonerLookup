import { Span } from "components/atoms/Span/Span";
import { useQueryClient } from "react-query";
import { ErrorBoundary } from "utils/ErrorBoundry";
import { StyledChallengeTooltip } from "./ChallengeTooltip.styled";

export const ChallengeTooltip = ({ badge = {} }) => {

  const queryClient = useQueryClient();
  const challenges = queryClient.getQueryData(["challenges"]);

  const challenge = challenges.find(chall => chall.id === badge.challengeId);

  return (
    <StyledChallengeTooltip rank={badge.level.toLowerCase()} data-tooltip>
      <Span align="left" size="sm"><b>{challenge.name}</b></Span>
      <Span align="left" size="sm"><em>{badge.level}</em></Span>
      <Span align="left" size="xs">{challenge.description}</Span>
    </StyledChallengeTooltip>
  );
};
