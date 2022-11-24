import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { Span } from "components/atoms/Span/Span";
import { StyledLiveGameBans } from "components/molecules/LiveGameBans/LiveGameBans.styled";
import { useQueryClient } from "react-query";

export const LiveGameBans = ({ bans, align, size, children, ...rest }) => {

  const queryClient = useQueryClient();
  const version = queryClient.getQueryData(["version"]);
  const champions = queryClient.getQueryData(["champions"]);

  return (
    <StyledLiveGameBans {...rest} align={align}>
      <Span width="auto" size="s" align="left">{children}</Span>
      {bans.map((ban, i) => {
        return (
          <ImageContainer
            key={i}
            border="black"
            width={size || "40px"}
            src={champions.get(`${ban.championId}`).link(version)}
            alt={`Champion ban ${i + 1}`}
          />
        );
      })}
    </StyledLiveGameBans>
  );
};
