import { StyledDisclaimer } from "./Disclaimer.styled";
import { ReactComponent as UggLogo } from "assets/ugg.svg";

export const Disclaimer = () => {

  return (
    <StyledDisclaimer>
      <p>
        <b>SummonerLookup</b> isn’t endorsed by <b>Riot Games</b> and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. <b>League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</b>
      </p>
      <p><b>SummonerLookup</b> is not affiliated with nor endorsed by <a href="http://u.gg" target="_blank" rel="noopener noreferrer"><b>U.gg</b></a>. Wherever there's a <UggLogo style={{ width: "14px", transform: "translateY(30%)" }} /> logo, that indicates which data comes from <a href="http://u.gg" target="_blank" rel="noopener noreferrer"><b>U.gg</b></a>.</p>
    </StyledDisclaimer>
  );
};
