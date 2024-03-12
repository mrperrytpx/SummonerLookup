import { StyledLoadingIndicator } from "./LoadingIndicator.styled";

export const LoadingIndicator = ({ ...rest }) => {
    return (
        <StyledLoadingIndicator {...rest}>
            <div />
            <div />
        </StyledLoadingIndicator>
    );
};
