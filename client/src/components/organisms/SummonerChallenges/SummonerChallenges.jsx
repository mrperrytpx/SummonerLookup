import { Span } from "components/atoms/Span/Span";
import { useGetSummonerChallengesQuery } from "hooks/useGetSummonerChallengesQuery";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { StyledSummonerChallenges } from "./SummonerChallenges.styled";

export const SummonerChallenges = () => {

  const [challenges, setChallenges] = useState(null);

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: summonerChallengesData } = useGetSummonerChallengesQuery(server, summonerName, summonerData.puuid);

  const categories = summonerChallengesData?.challenges?.slice(1, 6);

  const challengeCategory = (startingNumber) => {
    return summonerChallengesData?.challenges
      ?.filter((challenge) => (challenge.challengeId + "").charAt(0) === startingNumber + "")
      .sort((a, b) => {
        if (a.challengeId > b.challengeId) return 1;
        if (a.challengeId < b.challengeId) return -1;
        return 0;
      });
  };

  return (
    <StyledSummonerChallenges>
      <Span>{JSON.stringify(challengeCategory(2))}</Span>
    </StyledSummonerChallenges>
  );
};
