import styled from 'styled-components';
import BackgroundImage from 'img/background-image.jpg';

export const BackgroundStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-repeat: repeat;
  mask-image: linear-gradient(to left, #885c5cA0, #00000000);
  -webkit-mask-image:-webkit-gradient(linear, right top, left top, from(#885c5c14), to(#00000000));
  /* filter: blur(1px); */
`;
