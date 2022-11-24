import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { StyledChallengeCard } from "./ChallengeCard.styled";
import { SERVER_VALUES } from "consts/serverValues";
import { Span } from "components/atoms/Span/Span";
import { FlexCol, FlexColStart, FlexRow, FlexRowSpaceAround, FlexRowStart } from "components/atoms/FlexBoxes/FlexBoxes.styled";

export const ChallengeCard = ({ challenge }) => {

  const queryClient = useQueryClient();
  const { server } = useParams();
  const leagueChallengesData = queryClient.getQueryData(["challenges"]);
  const challengeData = leagueChallengesData.find(chal => chal.id === challenge.challengeId);

  return (
    <StyledChallengeCard tier={challenge?.level}>
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
          <Span size="xs">{new Date(challenge.achievedTime).toDateString()}</Span>
        </FlexCol>
      </FlexRow>
    </StyledChallengeCard>
  );
};
