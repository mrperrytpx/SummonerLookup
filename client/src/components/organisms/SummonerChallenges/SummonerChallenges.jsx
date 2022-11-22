import { FlexRow } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { ChallengeCategory } from "components/molecules/ChallengeCategory/ChallengeCategory";
import { useGetSummonerChallengesQuery } from "hooks/useGetSummonerChallengesQuery";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledSummonerChallenges } from "./SummonerChallenges.styled";
import { ChallengeCard } from "components/molecules/ChallengeCard/ChallengeCard";
import { useQueryClient } from "react-query";
import { Span } from "components/atoms/Span/Span";

export const SummonerChallenges = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: summonerChallengesData, isLoading } = useGetSummonerChallengesQuery(server, summonerName, summonerData.puuid);

  const queryClient = useQueryClient();
  const challenges = queryClient.getQueryData(["challenges"]);

  const [filtered, setFiltered] = useState(filteredChallenges(1));
  const categories = Object.keys(summonerChallengesData.categoryPoints);

  const memoFilter = useMemo(() => filtered, [filtered]);

  function filteredChallenges(index) {
    const challenges = [];
    for (let key in summonerChallengesData?.challenges) {
      if (key.toString().charAt(0) === index.toString()) {
        challenges.push(summonerChallengesData?.challenges[key]);
      }
    }
    return challenges;
  };


  const headers = [...filtered.slice(1).map((challenge) => challenge[0])];

  if (isLoading) return <p>fk u </p>;

  return (
    <StyledSummonerChallenges>
      <aside>
        {categories.map((category, i) => (
          <ChallengeCategory
            onClick={() => {
              setFiltered(filteredChallenges(i + 1));
              console.log("FILTERED", filtered);
            }}
            key={i}
            name={category}
            category={summonerChallengesData?.categoryPoints[category]}
          />
        ))}
      </aside>
      <div>
        {headers.map(header => {
          if (header.challengeId % 1000 === 0) {
            return (
              <h1>{challenges.find(chall => chall.id === header.challengeId).name}</h1>
            );
          } else {
            return (
              <div>
                <h2>{challenges.find(chall => chall.id === header.challengeId).name}</h2>
                {memoFilter.map((category, i) => {
                  if (!Array.isArray(category)) {
                    return <></>;
                  }
                  return (
                    <Span>{category.challengeId}</Span>
                  );
                })}
              </div>
            );
          }
        })}
        {/* {memoFilter.map((category, i) => {
          if (!Array.isArray(category)) {
            return <></>;
          }
          if (category.length === 1 && category[0].challengeId % 100 === 0) {
            return (
              <ChallengeCard solo={true} capstone={true} key={i} challenge={category[0]} />
            );
          }
          return (
            <FlexRow gap=".5rem" key={i}>
              {category.map((challenge, i) => {
                return (
                  <ChallengeCard capstone={challenge.challengeId % 100 === 0} key={i} challenge={challenge} />
                );
              })}
            </FlexRow>
          );
        })} */}
      </div>
    </StyledSummonerChallenges>
  );
};
