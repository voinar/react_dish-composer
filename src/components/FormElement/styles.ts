import styled from 'styled-components';
import IconArrow from 'img/icons/icon-arrow.svg';
import {
  primaryColor,
  secondaryColor,
  accentColor,
  defaultTransition,
} from 'styles/globalStyles';

const FormElementStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 1.3rem;
  transition: ${defaultTransition};
  will-change: transform;

  input[type='text'],
  input[type='number'],
  input[type='time'],
  select {
    padding: 0 0.5rem;
    height: 2.4rem;

    border: none;
    border-radius: 4px;
    border-bottom: 3px solid ${accentColor};

    background-color: ${secondaryColor};
    color: ${primaryColor};

    font-size: 1rem;

    transition: ${defaultTransition};

    &::placeholder {
      color: ${primaryColor};
      opacity: 0.6;
    }
  }

  input[type='time']::-webkit-calendar-picker-indicator {
    filter: invert(30%) sepia(100%) saturate(500%) hue-rotate(10deg)
      brightness(100%) contrast(90%);
  }

  input[type='time'] {
    @media screen and (max-width: 992px) {
      width: calc(100% - 1rem)
    }
  }

  select {
    width: 100%;
    appearance: none;
    background-image: url(${IconArrow});
    background-repeat: no-repeat;
    background-position: right 0.7rem center;
    background-size: 1em;
  }

  input:hover,
  select:hover {
    background-color: #f8cca0;
  }

  textarea:focus,
  input:focus,
  select:focus {
    outline: none;
    box-shadow: none;
    border-bottom-color:#885c5c10;
}
`;

export { FormElementStyled };