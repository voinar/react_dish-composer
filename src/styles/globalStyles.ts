import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100,200;300;400;500;600;800&display=swap');
  color: #885C5C;
  background-color: #F1EAE3;
  height: 100%;
  overflow-x: hidden;
}`;

export const primaryColor = '#885c5c';
export const secondaryColor = '#ece2d8';
export const accentColor = '#885c5c';
export const defaultTransition = 'all 0.5s';

export default GlobalStyle;
