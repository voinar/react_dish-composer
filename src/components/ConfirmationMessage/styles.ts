import styled from 'styled-components';

const ConfirmationMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  margin-left: 4rem;
  width: 20rem;
  height: auto;
`;

const ConfirmationMessageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ConfirmationMessageIcon = styled.img`
  height: 2rem;
  margin-right: 0.5rem;
`;

const ConfirmationMessageTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
`;

const ConfirmationMessageContent = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ConfirmationMessageContentRow = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-weight: 600;
  margin: 0.2rem;

  span {
    color: #68885c;
  }
`;

export {
  ConfirmationMessageStyled,
  ConfirmationMessageHeader,
  ConfirmationMessageIcon,
  ConfirmationMessageTitle,
  ConfirmationMessageContent,
  ConfirmationMessageContentRow,
};
