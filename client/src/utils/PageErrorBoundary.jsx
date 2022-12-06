import React from "react";
import styled from "styled-components";
import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { ErrorText } from "components/atoms/ErrorText/ErrorText";
import { Container } from "components/atoms/Container/Container";

const StyledErrorContainer = styled(FlexCol)`
    height: 90vh;
    width: 100%;
`;

export class PageErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <StyledErrorContainer>
          <Container>
            <ErrorText size="clamp(1.2rem, 3vw, 2rem)" center={true}>There uhh... Seems to be an issue 💀</ErrorText>
            <ErrorText size="clamp(.8rem, 3vw, 1.6rem)" center={true}>Try reloading the page</ErrorText>
          </Container>
        </StyledErrorContainer>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
};