import styled from 'styled-components';

export const AppStyled = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9999;
  margin-left: 20px;
  margin-right: 20px;

  padding: 6em;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
