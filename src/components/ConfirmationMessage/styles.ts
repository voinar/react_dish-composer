import styled from 'styled-components';

export const ConfirmationMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  height: auto;
`;

export const ConfirmationMessageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ConfirmationMessageIcon = styled.img`
  height: 2rem;
  margin-right: 0.5rem;
`;

export const ConfirmationMessageTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const ConfirmationMessageContent = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ConfirmationMessageContentRow = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-weight: 600;
    margin: .2rem;
  }

  p::before {
    content: '• ';
  }

  p::after {
    content: ': ';
  }

  span {
    color: #68885C;
  }
`;
