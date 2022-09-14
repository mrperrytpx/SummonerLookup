import { StyledMe } from "./Me.styled";
import { useGetFollowingQuery } from "../../../hooks/useGetFollowingQuery";
import { ExpandingMenu } from "../../molecules/ExpandingMenu/ExpandingMenu";
import { PlayerCard } from "../../molecules/PlayerCard/PlayerCard";

export const Me = () => {

  const { data: following, isLoading } = useGetFollowingQuery();

  return (
    <StyledMe>
      <ExpandingMenu expanded={true} label="Following">
        {isLoading
          ? <p>Loading...</p>
          : following.map(player => <PlayerCard player={player} key={player.puuid} />)}
      </ExpandingMenu>
      <ExpandingMenu label="Account" />
    </StyledMe>
  );
};
