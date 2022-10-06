import { Outlet, useParams } from "react-router-dom";
import { useGetSummonerQuery } from "../../../hooks/useGetSummonerQuery";
import { StyledSummoner } from "./Summoner.styled";
import { useGetSummonerChallengesQuery } from "../../../hooks/useGetSummonerChallengesQuery";
import { SummonerCard } from "../../organisms/SummonerCard/SummonerCard";

export const Summoner = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData, isLoading: isSummonerLoading } = useGetSummonerQuery(server, summonerName);
  const { data: summonerChallengesData, isLoading: isSummonerChallengesLoading } = useGetSummonerChallengesQuery(server, summonerName, summonerData?.puuid);

  if (isSummonerLoading || isSummonerChallengesLoading) return <div style={{ color: "white" }}>Loading...</div>;

  return (
    <StyledSummoner>
      <SummonerCard summonerData={summonerData} summonerChallengesData={summonerChallengesData} />

      <Outlet />
    </StyledSummoner>
  );
};
