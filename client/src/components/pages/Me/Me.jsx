import { StyledMe } from "./Me.styled";
import { ExpandingMenu } from "../../molecules/ExpandingMenu/ExpandingMenu";
import { useGetFollowingQuery } from "../../../hooks/useGetFollowingQuery";
import { FormNav } from "../../molecules/FormNav/FormNav";
import { FormNavLink } from "../../atoms/FormNavLink/FormNavLink";
import { Outlet, useLocation } from "react-router-dom";

export const Me = () => {

  const { data: following } = useGetFollowingQuery();
  const location = useLocation();

  return (
    <StyledMe>
      <FormNav>
        <FormNavLink active={location.pathname === "/me" ? 1 : 0} to="/me">Following</FormNavLink>
        <FormNavLink active={location.pathname === "/me/settings" ? 1 : 0} to="settings">Settings</FormNavLink>
      </FormNav>
      <ExpandingMenu label="Account" />
      <ExpandingMenu label="Password" />
      <ExpandingMenu label="Email" />
      {JSON.stringify(following, null, 2)}
      <Outlet />
    </StyledMe>
  );
};
