import { StyledSignInUpForm } from "./SignInUpForm.styled";

export const SignInUpForm = ({ children, onSubmit }) => {
  return (
    <StyledSignInUpForm onSubmit={onSubmit}>{children}</StyledSignInUpForm>
  );
};
