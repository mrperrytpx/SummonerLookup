import { useRef } from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { SERVER_VALUES } from "consts/serverValues";
import { StyledChallengeCard } from "./ChallengeCard.styled";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { Span } from "components/atoms/Span/Span";
import { FlexCol, FlexRow } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";

export const ChallengeCard = ({ challenge }) => {

  const queryClient = useQueryClient();
  const { server } = useParams();
  const leagueChallengesData = queryClient.getQueryData(["challenges"]);
  const challengeData = leagueChallengesData.find(chal => chal.id === challenge.challengeId);

  const challengeRef = useRef(null);
  const isVisible = useIntersectionObserver(challengeRef, { rootMargin: "500px" });

  return (
    <StyledChallengeCard isVisible={isVisible} ref={challengeRef} tier={challenge?.level}>
      <FlexRow gap="0.5rem">
        <ImageContainer
          src={`https://ddragon.leagueoflegends.com/cdn/img/challenges-images/${challenge?.challengeId}-${challenge?.level === "NONE" ? "IRON" : challenge?.level}.png`}
          alt="Challenge badge"
          width="46px"
          opacity={challenge?.level === "NONE" ? "0.4" : "1"}
          radius="50%"
          min="46px"
        />
        <FlexCol data-info gap="0.25rem">
          <div>
            <Span width="auto" size="m"><b>{challengeData.name + " "}</b></Span>
            <Span width="auto" size="sm">- {challengeData.description}</Span>
          </div>

          <Span size="s">
            <em>
              {challenge?.position ? `#${challenge.position} - ` : null}
              better than {Math.round(((1 - challenge.percentile) * 100))}% of {SERVER_VALUES[server]} - <b>{challenge.level}</b> tier
            </em>
          </Span>
          <Span width="auto" align="right" size="xs">{new Date(challenge.achievedTime).toDateString()}</Span>
        </FlexCol>
      </FlexRow>
    </StyledChallengeCard>
  );
};
