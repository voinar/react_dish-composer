import styled from 'styled-components';
import IconArrow from 'img/icons/icon-arrow.svg';
import { primaryColor, secondaryColor, accentColor, defaultTransition } from 'styles/globalStyles';

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

    font-size: 1rem;

    border: none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom: 3px solid ${accentColor};

    background-color: ${secondaryColor};
    color: ${primaryColor};

    transition: ${defaultTransition};

    &::placeholder {
      color: ${primaryColor};
      opacity: 0.6;
    }
  }

  input[type='time'] {
    /* width: 95%; */
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
    outline: 1px solid #885c5c10;
  }
`;

export { FormElementStyled };
