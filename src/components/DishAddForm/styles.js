import styled from 'styled-components';

export const DishAddFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 220px;

  gap: 1.4rem;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;

  input[type='text'],
  input[type='number'],
  select {
    padding: 0 8px;
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
    font-size: 16px;
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  height: 2.2rem;
  font-weight: 800;
  text-transform: uppercase;
  width: 100%;
  background-color: #ece2d8;
  border: 3px solid #885c5c;
  border-radius: 6px;
  color: #885c5c;
  cursor: pointer;
  transition: all .3s;

  :hover {
    background-color: #885c5c;
    color: #ece2d8;
  }
`;
