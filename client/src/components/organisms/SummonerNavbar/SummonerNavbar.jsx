import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { NavActiveLink } from "../../atoms/NavActiveLink/NavActiveLink";
import { StyledSummonerNavbar } from "./SummonerNavbar.styled";

export const SummonerNavbar = () => {

  const location = useLocation();
  const { server, summonerName } = useParams();

  const encodedSummoner = encodeURIComponent(summonerName);
  return (
    <StyledSummonerNavbar>
      <NavActiveLink active={location.pathname === `/${server}/${encodedSummoner}` ? 1 : 0} to="">Overview</NavActiveLink>
      <NavActiveLink active={location.pathname === `/${server}/${encodedSummoner}/stats` ? 1 : 0} to="stats">Ranked Stats</NavActiveLink>
      <NavActiveLink active={location.pathname === `/${server}/${encodedSummoner}/live-game` ? 1 : 0} to="live-game">Live Game</NavActiveLink>
    </StyledSummonerNavbar>
  );
};
