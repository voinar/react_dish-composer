import styled from 'styled-components';
import BackgroundImage from 'img/background-image.jpg';

export const BackgroundStyled = styled.div`

  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-repeat: repeat;
  /* -webkit-mask-image:-webkit-gradient(linear, left bottom, right top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0))); */
      mask-image: linear-gradient(to left, #885C5C14, #00000000);


  /* filter: blur(100px); */
  /* z-index: 1; */
`;
