import { Outlet, useParams } from "react-router-dom";
import { useGetSummonerQuery } from "../../../hooks/useGetSummonerQuery";
import { StyledSummoner } from "./Summoner.styled";
import { useGetSummonerChallengesQuery } from "../../../hooks/useGetSummonerChallengesQuery";
import { SummonerCard } from "../../organisms/SummonerCard/SummonerCard";
import { SummonerNavbar } from "../../organisms/SummonerNavbar/SummonerNavbar";
import { useGetSummonerRankedStatsQuery } from "../../../hooks/useGetSummonerRankedStatsQuery";

export const Summoner = () => {

  const { server, summonerName } = useParams();
  const { data: summonerData, isLoading: isSummonerLoading, isError } = useGetSummonerQuery(server, summonerName);
  const { data: summonerChallengesData, isLoading: isSummonerChallengesLoading } = useGetSummonerChallengesQuery(server, summonerName, summonerData?.puuid);
  useGetSummonerRankedStatsQuery(server, summonerData?.summonerId);

  if (isSummonerLoading || isSummonerChallengesLoading) return <div style={{ color: "white" }}>Loading...</div>;

  if (isError) return <div style={{ color: "white" }}>NO SUMMONER XD</div>;

  return (
    <StyledSummoner>
      <SummonerCard summonerData={summonerData} summonerChallengesData={summonerChallengesData} />
      <SummonerNavbar />
      <Outlet />
    </StyledSummoner>
  );
};
