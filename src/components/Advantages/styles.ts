import styled from "styled-components";

export const AdvantagesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
