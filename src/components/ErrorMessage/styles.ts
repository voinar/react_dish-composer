import styled from 'styled-components';

const ErrorMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  margin-left: 4rem;
  width: 20rem;
  height: auto;
`;

const ErrorMessageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ErrorMessageIcon = styled.img`
  height: 2rem;
  margin-right: 0.5rem;
`;

const ErrorMessageTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
`;

const ErrorMessageContent = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 500;
  list-style-type: none
`;

const ErrorMessageContentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-weight: 600;
  margin: 0.2rem;

  p {
    min-width: fit-content;
    margin-right: 0.5rem;

    &:after {
      content: ':';
    }

    font-weight: bold;
    color: #000000;
  }

  span {
    color: #ce0b0b;
  }
`;

export {
  ErrorMessageStyled,
  ErrorMessageHeader,
  ErrorMessageIcon,
  ErrorMessageTitle,
  ErrorMessageContent,
  ErrorMessageContentRow,
};
