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
    padding: 0 0.5rem;
    height: 2.2rem;

    font-size: 1rem;

    border: none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom: 3px solid #885c5c;

    background-color: #ece2d8;
    color: #885c5c;

    transition: all 0.3s;

    ::placeholder {
      color: #885c5c;
      opacity: 0.6; /* Firefox */
    }
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='saddlebrown' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right .7rem center;
    background-size: 1em;
  }

  input[type='time']::-webkit-datetime-edit-ampm-field {
    display: none;
  }

  input:hover,
  select:hover {
    background-color: #f5dcc3;
  }

  label {
    font-size: 1rem;
  }
`;
