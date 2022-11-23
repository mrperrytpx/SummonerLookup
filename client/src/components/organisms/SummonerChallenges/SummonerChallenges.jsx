import { ChallengeCard } from "components/molecules/ChallengeCard/ChallengeCard";
import { ChallengeCategory } from "components/molecules/ChallengeCategory/ChallengeCategory";
import { CHALLENGE_GROUPS } from "consts/challengeGroups";
import { useGetSummonerChallengesQuery } from "hooks/useGetSummonerChallengesQuery";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useCallback, useState } from "react";
// import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { StyledSummonerChallenges } from "./SummonerChallenges.styled";

export const SummonerChallenges = () => {

  const [currentCat, setCurrentCat] = useState(1);

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: summonerChallengesData, isLoading } = useGetSummonerChallengesQuery(server, summonerName, summonerData.puuid);
  // const queryClient = useQueryClient();
  // const challenges = queryClient.getQueryData(["challenges"]);

  const sortedByFirst = useCallback((index) => {
    return [...summonerChallengesData.challenges]
      .filter(chall => chall.challengeId.toString().charAt(0) === index.toString())
      .filter(chall => chall.challengeId.toString().length !== 1)
      .sort((a, b) => {
        if (a.percentile > b.percentile) return 1;
        if (a.percentile < b.percentile) return -1;
        return 0;
      });
  }, [summonerChallengesData.challenges]);

  if (isLoading) return <p>fk u </p>;

  return (
    <StyledSummonerChallenges>
      <aside>
        {CHALLENGE_GROUPS.map((category) => (
          <ChallengeCategory
            key={category.id}
            category={category}
            onClick={() => {
              setCurrentCat(category.id);
            }}
            data={summonerChallengesData.categoryPoints[category.name]} />
        ))}
      </aside>
      <div>
        {sortedByFirst(currentCat).map((challenge) => <ChallengeCard key={challenge.challengeId} challenge={challenge} />)}
      </div>
    </StyledSummonerChallenges>
  );
};
