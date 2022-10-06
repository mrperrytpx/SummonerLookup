import { useLocation, useParams } from "react-router-dom";
import { NavActiveLink } from "../../atoms/NavActiveLink/NavActiveLink";
import { StyledSummonerNavbar } from "./SummonerNavbar.styled";

export const SummonerNavbar = () => {

  const location = useLocation();
  const { server, summonerName } = useParams();

  return (
    <StyledSummonerNavbar>
      <NavActiveLink active={location.pathname === `/${server}/${summonerName}` ? 1 : 0} to="">Overview</NavActiveLink>
      <NavActiveLink active={location.pathname === `/${server}/${summonerName}/stats` ? 1 : 0} to="stats">Ranked Stats</NavActiveLink>
      <NavActiveLink active={location.pathname === `/${server}/${summonerName}/live-game` ? 1 : 0} to="live-game">Live Game</NavActiveLink>
    </StyledSummonerNavbar>
  );
};
