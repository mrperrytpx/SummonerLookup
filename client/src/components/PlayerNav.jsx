import { useReducer } from "react";
// Components
import Matches from "../components/Matches";
import PlayerStats from "../components/PlayerStats";

const initialState = {
  isOverviewActive: true,
  isStatsActive: false,
  isLiveActive: false
}

const stateReducer = (state, action) => {
  switch (action.type) {
    case "OVERVIEW":
      return { isOverviewActive: true, isStatsActive: false, isLiveActive: false }
    case "STATS":
      return { isOverviewActive: false, isStatsActive: true, isLiveActive: false }
    case "LIVE":
      return { isOverviewActive: false, isStatsActive: false, isLiveActive: true }
    default:
      return state;
  }
}

const PlayerNav = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <>
      <nav className="profile-navbar">
        <div className="profile-navbar-wrapper">
          <button type="button" onClick={() => dispatch({ type: "OVERVIEW" })}>OVERVIEW</button>
          <button type="button" onClick={() => dispatch({ type: "STATS" })}>STATS</button>
          <button type="button" onClick={() => dispatch({ type: "LIVE" })}>LIVE</button>
        </div>
      </nav>

      {state.isOverviewActive &&
        <>
          <PlayerStats />
          <Matches />
        </>
      }

    </>
  );
}

export default PlayerNav;