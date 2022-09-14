import { StyledMe } from "./Me.styled";
import { useGetFollowingQuery } from "../../../hooks/useGetFollowingQuery";
import { ExpandingMenu } from "../../molecules/ExpandingMenu/ExpandingMenu";

export const Me = () => {

  const { data: following } = useGetFollowingQuery();

  return (
    <StyledMe>
      <ExpandingMenu label="Account" />
      <ExpandingMenu label="Following" />
      {JSON.stringify(following, null, 2)}
    </StyledMe>
  );
};
