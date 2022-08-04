import styled from "styled-components";

export const ContactContainer = styled.section`
  display: grid;

  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  gap: 2rem;
  padding: 2rem 0;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;
export const ContactText = styled.div`
  p {
    line-height: 1.6;
    margin: 10px auto;
  }
  h2 {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2rem;
  input {
    padding: 0 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 2px solid var(--gray-200);
    width: 100%;
    height: 2rem;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    input {
      width: 100%;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    min-width: 20rem;
    border: 0;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
  }
`;