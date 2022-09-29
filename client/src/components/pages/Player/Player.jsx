import { useParams } from "react-router-dom";
import { useGetPlayerQuery } from "../../../hooks/useGetPlayerQuery";
import { StyledPlayer } from "./Player.styled";

export const Player = () => {

  const { server, summonerName } = useParams();
  const { data: playerData } = useGetPlayerQuery(server, summonerName);

  return (
    <StyledPlayer>
      <div style={{ color: "white" }}>{JSON.stringify(playerData, null, 2)}</div>
    </StyledPlayer>
  );
};
