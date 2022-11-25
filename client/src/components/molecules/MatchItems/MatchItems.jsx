import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";
import { useQueryClient } from "react-query";
import { StyledMatchItems } from "./MatchItems.styled";

export const MatchItems = ({ items, initialWidth, gap }) => {

  const queryClient = useQueryClient();
  const version = queryClient.getQueryData(["version"]);

  return (
    <StyledMatchItems gap={gap} data-itemgrid initialWidth={initialWidth}>
      {items.map((item, i) => (
        item
          ? <ImageContainer
            data-item
            border="black"
            width={`${initialWidth}px`}
            key={i}
            src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item}.png`}
            alt="Item"
          />
          : <ImageContainer
            data-item
            border="black"
            width={`${initialWidth}px`}
            key={i}
            src={`https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon29.png`}
            alt="Item"
          />
      ))}
    </StyledMatchItems>
  );
};
