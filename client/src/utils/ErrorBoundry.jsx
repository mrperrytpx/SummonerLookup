import React from "react";
import styled from "styled-components";
import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import { Span } from "components/atoms/Span/Span";

const StyledErrorContainer = styled(FlexCol)`
    visibility: hidden;
    border-radius: 2px;
    padding: .25rem .5rem;
    border: 2px solid white;

    @media only screen and (max-width: 650px) {
        transform: translateX(-50%);
        min-width: 100px;
    }
`;

export class ErrorBoundary extends React.Component {
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
    const absolute = this.props?.absolute;
    if (this.state.errorInfo) {
      // Error path
      return (
        <StyledErrorContainer
          style={{
            position: absolute ? "absolute" : "relative",
            top: absolute ? "50px" : null,
            left: absolute ? "20px" : null,
            minWidth: absolute ? "200px" : null,

          }}
          data-tooltip={absolute}
        >
          <p>Something went wrong 💀</p>
          <Span size="s" align="left">Try reloading the page</Span>
        </StyledErrorContainer>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
};