const PlayerNav = ({ dispatch }) => {
	return (
		<>
			<nav className="profile-navbar">
				<div className="profile-navbar-wrapper">
					<button type="button" onClick={() => dispatch({ type: "OVERVIEW" })}>OVERVIEW</button>
					<button type="button" onClick={() => dispatch({ type: "STATS" })}>STATS</button>
					<button type="button" onClick={() => dispatch({ type: "LIVE" })}>LIVE</button>
				</div>
			</nav>
		</>
	);
}

export default PlayerNav;