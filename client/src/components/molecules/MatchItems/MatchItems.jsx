import { useGetLeagueVersion } from "hooks/useGetLeagueVersion";
import { StyledMatchItems } from "./MatchItems.styled";
import { ImageContainer } from "components/atoms/ImageContainer/ImageContainer";

export const MatchItems = ({ items, initialWidth, gap, gameVersion }) => {
    const { data: version } = useGetLeagueVersion();

    return (
        <StyledMatchItems gap={gap} data-itemgrid initialWidth={initialWidth}>
            {items.map((item, i) =>
                item ? (
                    <ImageContainer
                        key={i}
                        data-item
                        width={`${initialWidth}px`}
                        src={`https://ddragon.leagueoflegends.com/cdn/${
                            gameVersion || version
                        }/img/item/${item}.png`}
                        alt="Item"
                    />
                ) : (
                    <div key={i} data-item data-empty />
                )
            )}
        </StyledMatchItems>
    );
};
