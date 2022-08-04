import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --shape: #FFFFFF;
        --gray-50: #F3F2F2;
        --gray-100: ##9F9F9F;
        --gray-200: #3C3F45;
        --gray-300: #B1AFAA;
        --gray-400: #9B9892;
        --gray-500: #85817A;
        --gray-600: #6A6762;
        --gray-700: #504E49;
        --gray-800: #353431;
        --gray-900: #1B1A18;
        --gray-950: #121214;
        
        --blue-100: #31ABF8;
        --blue-200: #30cfd0;
        --blue-300: #34A6EB;
        --blue-500: ##146695;
        --blue-600: #447493;
        --blue-700: #084d6e;
        --blue-800: #115798
        --blue-900: #0C5A85;
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
    body, input, textarea, button, p {
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }
    h1, h3, h4, h5, h6, strong {
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
