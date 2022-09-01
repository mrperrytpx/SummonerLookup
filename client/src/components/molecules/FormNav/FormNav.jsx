import { StyledFormNav } from "./FormNav.styled";
import { FormNavLink } from "../../atoms/FormNavLink/FormNavLink";

export const FormNav = ({ children }) => {
  return (
    <StyledFormNav>
      {children}
    </StyledFormNav>
  );
};
