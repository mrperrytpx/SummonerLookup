import { StyledButton } from "./Button.styled";

export const Button = ({ wide = false, children, onClick = () => null, variant, type = "button", ...rest }) => {
  return (
    <StyledButton
      {...rest}
      wide={wide}
      type={type}
      onClick={onClick}
      variant={variant}
    >{children}
    </StyledButton>
  );
};