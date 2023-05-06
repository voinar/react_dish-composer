import styled from 'styled-components';

export const ConfirmationMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ConfirmationMessageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ConfirmationMessageIcon = styled.img`
  height: 2rem;
`;

export const ConfirmationMessageTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const ConfirmationMessageContent = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ConfirmationMessageContentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 1.2rem;

  p {
    font-weight: 600;
  }

  p::before {
    content: '• ';
  }

  p::after {
    content: ': ';
  }

  span {
    color: #ce0b0b;
  }
`;
