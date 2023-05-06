import styled from 'styled-components';

const DishAddFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100%;
  padding: 1.5rem;

  background-color: #ece2d8;
  border: 1px solid #885c5c22;
  border-radius: .5rem;
`;

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const FormHeaderText = styled.h1`
  font-size: 1.6rem;
  margin-left: 0.5rem;
  cursor: default;
`;

const Button = styled.button`
  margin-top: 3rem;
  margin-bottom: 2rem;
  height: 2.4rem;
  font-weight: 800;
  text-transform: uppercase;
  width: 100%;
  background-color: #ece2d8;
  border: 3px solid #885c5c;
  border-radius: 6px;
  color: #885c5c;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #885c5c;
    color: #ece2d8;
    border-color: #ece2d8;
  }
`;

export { DishAddFormStyled, FormHeader, FormHeaderText, Button };
