import { Outlet, useParams } from "react-router-dom";
import { useGetPlayerQuery } from "../../../hooks/useGetPlayerQuery";
import { StyledPlayer } from "./Player.styled";
import { useGetPlayerChallengesQuery } from "../../../hooks/useGetPlayerChallengesQuery";
import { PlayerCard } from "../../organisms/PlayerCard/PlayerCard";

export const Player = () => {

  const { server, summonerName } = useParams();
  const { data: playerData, isLoading: isPlayerLoading } = useGetPlayerQuery(server, summonerName);
  const { data: playerChallengesData, isLoading: isPlayerChallengesLoading } = useGetPlayerChallengesQuery(server, summonerName, playerData?.puuid);

  if (isPlayerLoading || isPlayerChallengesLoading) return <div style={{ color: "white" }}>Loading...</div>;

  return (
    <StyledPlayer>
      <PlayerCard playerData={playerData} playerChallengesData={playerChallengesData} />

      <Outlet />
    </StyledPlayer>
  );
};
