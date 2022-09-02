import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
body{
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    font-family:  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}
`