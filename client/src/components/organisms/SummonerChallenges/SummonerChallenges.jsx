import { FlexRow } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { ChallengeCard } from "components/molecules/ChallengeCard/ChallengeCard";
import { ChallengeCategory } from "components/molecules/ChallengeCategory/ChallengeCategory";
import { CHALLENGE_GROUPS } from "consts/challengeGroups";
import { useGetSummonerChallengesQuery } from "hooks/useGetSummonerChallengesQuery";
import { useGetSummonerQuery } from "hooks/useGetSummonerQuery";
import { useMemo, useState } from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { StyledSummonerChallenges } from "./SummonerChallenges.styled";

export const SummonerChallenges = () => {

  const [currentCat, setCurrentCat] = useState(1);

  const { server, summonerName } = useParams();
  const { data: summonerData } = useGetSummonerQuery(server, summonerName);
  const { data: summonerChallengesData, isLoading } = useGetSummonerChallengesQuery(server, summonerName, summonerData.puuid);
  const queryClient = useQueryClient();
  const challenges = queryClient.getQueryData(["challenges"]);

  // const categories = Object.keys(summonerChallengesData.categoryPoints);
  // const [filtered, setFiltered] = useState(filteredChallenges(1));

  // const memoFilter = useMemo(() => filtered, [filtered]);

  const sortedByFirst = (index) => {
    return summonerChallengesData.oldChallenges
      .filter(chall => chall.challengeId.toString().charAt(0) === index.toString())
      .sort((a, b) => {
        if (a.challengeId > b.challengeId) return 1;
        if (a.challengeId < b.challengeId) return -1;
        return 0;
      });
  };

  //  { const getSubcategories = sortedByFirst(currentCat).filter(chall => chall.challengeId % 1000 !== 0 && chall.challengeId % 100 === 0);

  //   function filteredChallenges(index) {
  //     const challenges = [];
  //     for (let key in summonerChallengesData?.challenges) {
  //       if (key.toString().charAt(0) === index.toString()) {
  //         challenges.push(summonerChallengesData?.challenges[key]);
  //       }
  //     }
  //     return challenges;
  //   };

  //   const headers = useMemo(() => {
  //     return [...memoFilter.slice(1).map((challenge) => challenge[0]).filter(chall => chall.challengeId % 1000 !== 0)];
  //   }, [memoFilter]);

  //   const unheadered = useMemo(() => {
  //     return [...memoFilter.slice(1).map((challenge) => challenge[0]).filter(chall => chall.challengeId % 1000 === 0)];
  //   }, [memoFilter]);

  //   const findHeaderName = (headerId) => challenges.find(challenge => challenge.id === headerId);}

  // console.log("subcats", getSubcategories);

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

        {sortedByFirst(currentCat).slice(1).map(chall => {
          if (chall.challengeId % 1000 === 0) {
            return <div>{chall.challengeId}</div>;
          }

        })}
        <div>
          <div>
            {sortedByFirst(currentCat).slice(1).map(chall => {
              if (chall.challengeId % 1000 !== 0 && chall.challengeId % 100 === 0) {
                return (
                  <div>
                    <h2>{chall.challengeId}</h2>
                    <FlexRow>
                      {sortedByFirst(currentCat).slice(1).map(donk => {
                        if (donk.challengeId % 1000 !== 0 && chall.challengeId.toString().slice(0, 4) === donk.challengeId.toString().slice(0, 4)) {
                          return <ChallengeCard challenge={donk} />;
                        }
                      })}
                    </FlexRow>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      {/* <div>
        {unheadered.map(x => (<div key={x.challengeId}>{findHeaderName(x.challengeId).name}</div>))}
        {headers.map((header) => (
          <div key={header.challengeId}>
            <div>{findHeaderName(header.challengeId).name}</div>
            <FlexRow>
              {summonerChallengesData.challenges[header.challengeId].map(challenge => (
                <ChallengeCard key={challenge.challengeId} challenge={challenge} />
              ))}
            </FlexRow>
          </div>
        ))}
      </div> */}
    </StyledSummonerChallenges>
  );
};
