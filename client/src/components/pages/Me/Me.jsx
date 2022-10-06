import { StyledMe } from "./Me.styled";
import { useGetFollowingQuery } from "../../../hooks/useGetFollowingQuery";
import { ExpandingMenu } from "../../molecules/ExpandingMenu/ExpandingMenu";
import { SummonerCardSmall } from "../../molecules/SummonerCardSmall/SummonerCardSmall";
import { DeleteAccount } from "../../molecules/DeleteAccount/DeleteAccount";
import { FollowingList } from "../../molecules/FollowingList/FollowingList";

export const Me = () => {

  const { data: following, isLoading } = useGetFollowingQuery();

  return (
    <StyledMe>
      <ExpandingMenu expanded={true} label="Following">
        <FollowingList>
          {isLoading
            ? <p>Loading...</p>
            : following.map(summoner => <SummonerCardSmall summoner={summoner} key={summoner.puuid} />)}
        </FollowingList>
      </ExpandingMenu>
      <ExpandingMenu label="Account">
        <DeleteAccount />
      </ExpandingMenu>
    </StyledMe>
  );
};
