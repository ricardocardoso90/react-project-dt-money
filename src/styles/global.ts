import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 2px ${({ theme }) => theme.COLORS.GREEN_500};
  }

  body {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input, 
  button,
  textarea {
    font: 400 1rem Roboto, sans-serif;
  }
`;