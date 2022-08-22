import { Link } from "react-router-dom";
import { StyledFormNav } from "./FormNav.styled";
import { FormNavLink } from "../../atoms/FormNavLink/FormNavLink";

export const FormNav = () => {
  return (
    <StyledFormNav>
      <FormNavLink to="/signin">Sign In</FormNavLink>
      <FormNavLink to="/signup">Sign Up</FormNavLink>
    </StyledFormNav>
  );
};
