import { useQueryClient } from "react-query";
import { StyledGameBans } from "./GameBans.styled";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { Span } from "components/atoms/Span/Span";

export const GameBans = ({ bans, align, size, children, ...rest }) => {

  const queryClient = useQueryClient();
  const version = queryClient.getQueryData(["version"]);
  const champions = queryClient.getQueryData(["champions"]);

  return (
    <StyledGameBans {...rest} align={align}>
      <Span width="auto" size="s" align="left">{children}</Span>
      {bans.map((ban, i) => (
        <ImageContainer
          data-banned-champ
          key={i}
          width={size || "40px"}
          outline="black"
          src={champions.get(`${ban.championId}`).link(version)}
          alt={`Champion ban ${i + 1}`}
        />
      ))}
    </StyledGameBans>
  );
};
