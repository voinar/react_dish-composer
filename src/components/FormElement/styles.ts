import styled from 'styled-components';

export const FormElementStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 1.3rem;
  overflow: 'hidden';
  transition: all 0.6s;
  will-change: transform;

  input[type='text'],
  input[type='number'],
  input[type='time'],
  select {
    padding: 0 .5rem;
    height: 2.2rem;

    font-size: 1rem;

    border: none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom: 3px solid #885c5c;

    background-color: #ece2d8;
    color: #885c5c;

    ::placeholder {
      color: #885c5c;
      opacity: 0.6; /* Firefox */
    }
  }

  select {
    /* -webkit-appearance: none; */
    /* -moz-appearance: none; */
    /* appearance: none; */
    /* Remove default arrow */
    /* Add custom arrow */
  }

  label {
    font-size: 1rem;
  }
`;
