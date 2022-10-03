import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Span } from "../../atoms/Span/Span";
import { StyledSummonerInfo } from "./SummonerInfo.styled";
import { Button } from "../../atoms/Button/Button";

export const SummonerInfo = () => {

  const queryClient = useQueryClient();
  const { server, summonerName } = useParams();
  const playerData = queryClient.getQueryData(["player", server, summonerName.toLowerCase()]);
  const leagueChallengesData = queryClient.getQueryData(["challenges"]);
  const playerChallengesData = queryClient.getQueryData(["challenges", server, summonerName, playerData?.puuid]);

  const playerTitle = () => {
    const playerTitleId = +playerChallengesData?.preferences.title.slice(0, -2);
    const playerTitleInObject = +playerChallengesData?.preferences.title.slice(-1);

    const titleData = leagueChallengesData?.find(challenge => challenge.id === playerTitleId);
    const titleKey = Object.keys(titleData?.thresholds)[playerTitleInObject];

    const correctTitle = titleData?.thresholds[`${titleKey}`].rewards[0].title;
    return correctTitle;
  };


  return (
    <StyledSummonerInfo>
      <Span>{playerData?.summonerName} {playerChallengesData?.preferences?.title ? "- " + playerTitle() : null}</Span>
      <Span>{playerChallengesData?.totalPoints?.current} OUT OF {playerChallengesData?.totalPoints?.max} CHALLENGE POINTS EARNED</Span>
      <Button type="button" variant="danger" >FOLLOW</Button>
    </StyledSummonerInfo>
  );
};


