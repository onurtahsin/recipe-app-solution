import { createGlobalStyle, ThemeConsumer } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    font-family: 'Girassol',cursive;
  }
  body{
    font-size: 1.5rem;
    background-color: ${({theme}) => theme.colors.mainColor};
  }


`;
