import { StyledFormNavLink } from "./FormNavLink.styled";

export const FormNavLink = ({ to, children }) => {

  return (
    <StyledFormNavLink to={to}>{children}</StyledFormNavLink>
  );
};
