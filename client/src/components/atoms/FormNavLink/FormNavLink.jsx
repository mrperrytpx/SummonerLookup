import { StyledFormNavLink } from "./FormNavLink.styled";

export const FormNavLink = ({ active, to, children }) => {

  return (
    <StyledFormNavLink active={active} to={to}>{children}</StyledFormNavLink>
  );
};
