import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  box-shadow: 0 0 0.1em ${(props) => props.theme.colors.text};
  p {
    font-size: 1rem;
    text-align: justify;
  }
  img {
    height: 1.5rem;
    margin-bottom: -0.5rem;
  }
`;
