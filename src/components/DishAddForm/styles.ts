import styled from 'styled-components';

export const DishAddFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const FormHeaderText = styled.h1`
  font-size: 1.6rem;
  margin-left: 8px;
`;

export const Button = styled.button`
  margin: 3rem 0 2rem;
  height: 2.2rem;
  font-weight: 800;
  text-transform: uppercase;
  width: 100%;
  background-color: #ece2d8;
  border: 3px solid #885c5c;
  border-radius: 6px;
  color: #885c5c;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background-color: #885c5c;
    color: #ece2d8;
  }
`;
