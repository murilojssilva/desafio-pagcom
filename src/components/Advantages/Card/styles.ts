import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    font-size: 0.875rem;
    text-align: center;
  }
  span {
    margin: 1rem 0;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      ${(props) => props.theme.colors.secundary},
      ${(props) => props.theme.colors.primary}
    );
    width: 5rem;
    height: 5rem;
  }
`;
