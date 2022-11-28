import { useQueryClient } from "react-query";
import { StyledMatchItems } from "./MatchItems.styled";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";

export const MatchItems = ({ items, initialWidth, gap }) => {

  const queryClient = useQueryClient();
  const version = queryClient.getQueryData(["version"]);

  return (
    <StyledMatchItems gap={gap} data-itemgrid initialWidth={initialWidth}>
      {items.map((item, i) => (
        item
          ? <ImageContainer
            key={i}
            data-item
            width={`${initialWidth}px`}
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item}.png`}
            alt="Item"
          />
          : <div
            key={i}
            data-item
            data-empty
          />
      ))}
    </StyledMatchItems>
  );
};
