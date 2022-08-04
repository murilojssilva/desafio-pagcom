import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --shape: #FFFFFF;
        --gray-500: #939393;
        --blue-100: #31ABF8;
        --blue-500: #447493;
        --red-500: #F44336;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
		-webkit-font-smoothing: antialiased;
    }
    body, input, button, p {
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }
    h1, h3{
        font-family: 'Encode Sans SC', sans-serif;
        font-weight: 900;
    }
    button {
        transform: filter 0.2s;
		&:hover{
			filter:brightness(0.9);
		}
    }
    input, button{
        cursor: pointer;
    }
   
    p {
        color: ${(props) => props.theme.colors.text};
        font-size: 1.125rem;
        text-align: justify;
    }
    h1 {
        font-size: 2.5rem;
        color: ${(props) => props.theme.colors.primary};
        text-transform: uppercase;
        span {
            font-size: 2.5rem;
            color: ${(props) => props.theme.colors.secundary};
        }
    }

    h2  {
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
        font-size: 2.5rem;
    }

    ul {
        list-style: none;
        li {
            color: ${(props) => props.theme.colors.text};
        }
    }
    
    @media (max-width: 768px) {
   html {
    font-size: 87,5%;
   }
  }
`;
