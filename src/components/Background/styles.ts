import styled from 'styled-components';
import BackgroundImage from 'img/background-image.jpg';

export const BackgroundStyled = styled.div`
  background-image: url(${BackgroundImage});
  width: 100vw;
  height: 100vh;
  filter: blur(100px);
  /* z-index: 1; */
`;
