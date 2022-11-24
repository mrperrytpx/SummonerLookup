import { ChallengeCard } from "components/molecules/ChallengeCard/ChallengeCard";
import { ChallengeCategory } from "components/molecules/ChallengeCategory/ChallengeCategory";
import { CHALLENGE_GROUPS } from "consts/challengeGroups";
import { useGetSummonerChallengesQuery } from "hooks/useGetSummonerChallengesQuery";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledSummonerChallenges } from "./SummonerChallenges.styled";
import { CHALLENGE_THRESHOLDS } from "consts/challengeThresholds";
import { Container } from "components/atoms/Container/Container";
import { ErrorText } from "components/atoms/ErrorText/ErrorText";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";

export const SummonerChallenges = () => {

  const [currentCat, setCurrentCat] = useState(1);

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: summonerChallengesData, isLoading } = useGetSummonerChallengesQuery(server, summonerName, summonerData.puuid);

  const sortedByFirst = useCallback((index) => {
    return [...summonerChallengesData.challenges]
      .filter(chall => chall.challengeId.toString().charAt(0) === index.toString())
      .filter(chall => chall.challengeId.toString().length !== 1)
      .filter(chall => chall.level !== "NONE")
      .sort((a, b) => {
        const indexA = CHALLENGE_THRESHOLDS.indexOf(a.level);
        const indexB = CHALLENGE_THRESHOLDS.indexOf(b.level);
        if (indexA > indexB) return -1;
        if (indexA < indexB) return 1;
        return 0;
      });
  }, [summonerChallengesData.challenges]);

  const sortedChallenges = sortedByFirst(currentCat);
  const categoryName = CHALLENGE_GROUPS.find(grp => grp.id === currentCat).name;

  if (isLoading) return (
    <Container>
      <LoadingIndicator />
    </Container>
  );

  return (
    <StyledSummonerChallenges>
      <aside>
        {CHALLENGE_GROUPS.map((category) => (
          <ChallengeCategory
            isActive={categoryName === category.name}
            key={category.id}
            category={category}
            onClick={() => {
              setCurrentCat(category.id);
            }}
            data={summonerChallengesData.categoryPoints[category.name]} />
        ))}
      </aside>
      <div>
        {sortedChallenges.length
          ? sortedChallenges.map((challenge) => <ChallengeCard key={challenge.challengeId} challenge={challenge} />)
          : <div>
            <ErrorText size="clamp(0.75rem, 2vw, 1.3rem)" center={true}>No completed challenges for this category</ErrorText>
            <ErrorText size="clamp(0.75rem, 2vw, 1.3rem)" center={true}>(┬┬﹏┬┬)</ErrorText>
          </div>
        }
      </div>
    </StyledSummonerChallenges>
  );
};
