import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Inter', sans-serif;
  color: #885C5C;
  background-color: #F1EAE3;
}

textarea:focus,
input:focus,
select:focus {
  outline: 1px solid #885C5C33;
}

${'' /* h1 {
  font-size: 32px;
  font-weight: 400;
}

h2 {
  font-size: 22px;
}

span {
  font-size: 16px;
} */}

`;

export default GlobalStyle;
