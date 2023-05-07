import styled from 'styled-components';

export const FormStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
