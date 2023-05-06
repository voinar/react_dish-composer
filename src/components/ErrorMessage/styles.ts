import styled from 'styled-components';

export const ErrorMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  height: auto;
`;

export const ErrorMessageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ErrorMessageIcon = styled.img`
  height: 2rem;
  margin-right: 0.5rem;
`;

export const ErrorMessageTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const ErrorMessageContent = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ErrorMessageContentRow = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-weight: 600;
    margin: 0.2rem;
    min-width: fit-content;
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
