import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 0.875rem;
    text-align: center;
  }
  span {
    margin: 2rem 0;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      ${(props) => props.theme.colors.secundary},
      ${(props) => props.theme.colors.primary}
    );
    width: 6rem;
    height: 6rem;
  }
`;
