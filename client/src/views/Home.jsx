import NavButton from "../components/atoms/NavButton";
import "../components/templates/homeTemplate/home.css";

export default function Home() {
	return (
		<main>
			<nav>
				<div className="image-container">
					<img src="./" alt="fuck you" />
				</div>
				<ul>
					<div className="links-container">
						<NavButton use="login" />
						<NavButton use="register" />
					</div>
				</ul>
			</nav>

			<form>
				<div className="search-wrapper">

					<div className="search-bar">
						<input type="text" />
						<button type="submit" >SEARCH</button>
					</div>

					<div className="regions-container">
						<button type="">EUNE</button>
						<button type="">EUW</button>
						<button type="">TR</button>
						<button type="">RU</button>
						<button type="">NA</button>
						<button type="">OCE</button>
						<button type="">LAN</button>
						<button type="">LAS</button>
						<button type="">BR</button>
						<button type="">KR</button>
						<button type="">JP</button>

					</div>
				</div>

			</form>


		</main>
	);
}
