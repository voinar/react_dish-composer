import styled from 'styled-components';
import { secondaryColor } from 'styles/globalStyles';

const ConfirmationMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: .4rem 1.4rem 1rem;
  width: 20rem;
  background-color: #e7f5e2;
  outline: 1px solid ${secondaryColor};
  border-radius: .6rem;
  gap: 1rem;
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

const ConfirmationMessageButton = styled.button`
  display: flex;
  all: unset;
  height: 1rem;
  width: auto;
  margin-left: auto;
  align-items: center;
  cursor: pointer;

  img {
    height: 100%;
    filter: invert(30%) sepia(100%) saturate(500%) hue-rotate(10deg)
      brightness(100%) contrast(90%);
  }
`;

export {
  ConfirmationMessageStyled,
  ConfirmationMessageHeader,
  ConfirmationMessageIcon,
  ConfirmationMessageTitle,
  ConfirmationMessageContent,
  ConfirmationMessageContentRow,
  ConfirmationMessageButton,
};
