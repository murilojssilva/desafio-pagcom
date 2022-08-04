import styled from "styled-components";

export const ComeTogetherContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  gap: 2rem;
  height: 23rem;
  padding: 1rem 0;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;

export const ComeTogetherText = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      list-style-type: none;
      margin-bottom: 1rem;
      display: flex;
      line-height: 1.6;
      counter-increment: list;
      position: relative;
      &::after {
        content: counter(list) ".";
        position: absolute;
        left: -2.5em;
        width: 2em;
        text-align: right;
        color: ${(props) => props.theme.colors.primary};
        font-family: "Encode Sans SC", sans-serif;
        font-weight: 900;
      }
    }
  }
`;

export const ComeTogetherImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  img {
    width: 23rem;
    height: 23rem;
    display: grid;
    margin: 0 auto;
  }
`;
