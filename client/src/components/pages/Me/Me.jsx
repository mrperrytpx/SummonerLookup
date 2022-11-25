import { StyledMe } from "./Me.styled";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";
import { DeleteAccount } from "../../molecules/DeleteAccount/DeleteAccount";
import { ExpandingMenu } from "../../molecules/ExpandingMenu/ExpandingMenu";
import { FollowingList } from "../../molecules/FollowingList/FollowingList";
import { SummonerCardSmall } from "../../molecules/SummonerCardSmall/SummonerCardSmall";
import { useGetFollowingQuery } from "../../../hooks/useGetFollowingQuery";

export const Me = () => {

  const { data: following, isLoading } = useGetFollowingQuery();

  return (
    <StyledMe>
      <ExpandingMenu expanded={true} label="Following">
        <FollowingList>
          {isLoading
            ? <LoadingIndicator />
            : following.map(summoner => <SummonerCardSmall summoner={summoner} key={summoner.puuid} />)}
        </FollowingList>
      </ExpandingMenu>
      <ExpandingMenu label="Account">
        <DeleteAccount />
      </ExpandingMenu>
    </StyledMe>
  );
};