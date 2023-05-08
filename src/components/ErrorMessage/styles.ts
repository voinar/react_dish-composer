import styled from 'styled-components';
import { secondaryColor } from 'styles/globalStyles';

const ErrorMessageStyled = styled.div`
 display: flex;
  flex-direction: column;
  padding: .4rem 1.4rem 1rem;
  width: 20rem;
  background-color: #FFE0DE;
  outline: 1px solid ${secondaryColor};
  border-radius: .6rem;
  gap: 1rem;
  box-shadow: 0px 0px 18px 2px rgba(136, 92, 92, 0.14);

  @media screen and (max-width: 992px) {
    width: 16rem;
    margin-top: 2rem;
  }
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
  list-style-type: none;
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
    line-height: 2em;

    &:after {
      content: ':';
    }

    font-weight: bold;
    color: #000000AA;
  }

  span {
    color: #ce0b0b;
  }
`;

const ErrorMessageButton = styled.button`
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
  ErrorMessageStyled,
  ErrorMessageHeader,
  ErrorMessageIcon,
  ErrorMessageTitle,
  ErrorMessageContent,
  ErrorMessageContentRow,
  ErrorMessageButton
};
