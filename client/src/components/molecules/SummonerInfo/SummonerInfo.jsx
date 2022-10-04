import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Span } from "../../atoms/Span/Span";
import { StyledSummonerInfo } from "./SummonerInfo.styled";
import { Button } from "../../atoms/Button/Button";
import { CHALLENGE_THRESHOLDS } from "../../../consts/challengeThresholds";

export const SummonerInfo = () => {

  const queryClient = useQueryClient();
  const { server, summonerName } = useParams();
  const playerData = queryClient.getQueryData(["player", server, summonerName.toLowerCase()]);
  const leagueChallengesData = queryClient.getQueryData(["challenges"]);
  const playerChallengesData = queryClient.getQueryData(["challenges", server, summonerName, playerData?.puuid]);

  const playerTitle = () => {
    const playerTitleId = +playerChallengesData?.preferences.title.slice(0, -2);
    // titleId converted to a number excluding last 2 digits
    const playerTitleInObject = +playerChallengesData?.preferences.title.slice(-1);
    // last digit in titleId which determines which object's child (in order) it is that has the actual title string

    const titleData = leagueChallengesData?.find(challenge => challenge.id === playerTitleId);
    // find challenge data with shortened titleId
    const titleKey = CHALLENGE_THRESHOLDS[playerTitleInObject];
    // gets which key in 'thresholds' object has the actual title string
    // example: CHALLENGE_THRESHOLDS[2] returns "SILVER" which would have .rewards[0].title in it
    // why doesn't the API separate the ID itself or why doesn't it just return the title string instead of the ID 
    // boggles my mind greatly

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


