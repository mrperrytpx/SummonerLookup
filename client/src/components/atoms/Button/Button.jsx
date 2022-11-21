import { StyledButton } from "./Button.styled";

export const Button = ({ wide, children, onClick = () => null, variant, type = "button", ...rest }) => {
  return (
    <StyledButton
      {...rest}
      type={type}
      onClick={onClick}
      variant={variant}
    >{children}
    </StyledButton>
  );
};