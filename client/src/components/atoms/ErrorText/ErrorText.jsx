import { StyledErrorText } from "./ErrorText.styled";

export const ErrorText = ({ children, center = false }) => {
  return (
    <StyledErrorText center={center}>{children}</StyledErrorText>
  );
};
