import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { StyledLiveGameBans } from "components/molecules/LiveGameBans/LiveGameBans.styled";
import { useQueryClient } from "react-query";

export const LiveGameBans = ({ bans, align }) => {

  const queryClient = useQueryClient();
  const version = queryClient.getQueryData(["version"]);
  const champions = queryClient.getQueryData(["champions"]);

  return (
    <StyledLiveGameBans align={align} >
      {bans.map((ban, i) => (
        <ImageContainer
          key={i}
          border="black"
          width="44px"
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champions.get(`${ban.championId}`)}.png`}
          alt={`Champion ban ${i + 1}`}
        />
      ))}
    </StyledLiveGameBans>
  );
};
