import { StyledErrorText } from "./ErrorText.styled";

export const ErrorText = ({ children, center = false, ...rest }) => {
    return (
        <StyledErrorText {...rest} center={center}>
            {children}
        </StyledErrorText>
    );
};
