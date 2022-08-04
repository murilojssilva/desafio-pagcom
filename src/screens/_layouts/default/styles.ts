import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LayoutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  padding: 2rem 10rem;
  @media (max-width: 768px) {
    padding: 2rem 5rem;
  }
`;
