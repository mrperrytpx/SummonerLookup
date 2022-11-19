import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColors.secondary};
  padding: 1.5rem;
  margin: 1rem auto;
  border-radius: 10px;
`;