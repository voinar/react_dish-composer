import styled from 'styled-components';

export const FormStyled = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
