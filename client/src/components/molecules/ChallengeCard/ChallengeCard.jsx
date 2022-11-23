import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { StyledChallengeCard } from "./ChallengeCard.styled";
import { SERVER_VALUES } from "consts/serverValues";
import { Span } from "components/atoms/Span/Span";

export const ChallengeCard = ({ challenge }) => {

  const queryClient = useQueryClient();
  const { server } = useParams();
  const leagueChallengesData = queryClient.getQueryData(["challenges"]);
  const challengeData = leagueChallengesData.find(chal => chal.id === challenge.challengeId);

  return (
    <StyledChallengeCard tier={challenge?.level}>
      {/* <div>{JSON.stringify(challenge)}</div> */}
      <Span size="m">{challengeData.name}</Span>
      <ImageContainer
        src={`https://ddragon.leagueoflegends.com/cdn/img/challenges-images/${challenge?.challengeId}-${challenge?.level === "NONE" ? "IRON" : challenge?.level}.png`}
        alt="Challenge badge"
        width="50px"
        opacity={challenge?.level === "NONE" ? "0.4" : "1"}
        radius="50%"
        min="50px"
      />
      <Span size="s">{challenge.level}</Span>
      <Span size="s">{challenge?.position ? `#${challenge.position} - ` : null}better than {Math.round(((1 - challenge.percentile) * 100))}% of {SERVER_VALUES[server]}</Span>
      <Span size="s">{challengeData.description}</Span>
      <Span size="s">
      </Span>
      {/* {challenge?.level !== "NONE" && <div>NEXT LEVEL: {challengeData.thresholds[challenge.level]}</div>} */}
      {challenge?.achievedTime && challenge?.level !== "NONE" ? <Span size="s">Earned on {challenge?.achievedTime}</Span> : null}
    </StyledChallengeCard>
  );
};
