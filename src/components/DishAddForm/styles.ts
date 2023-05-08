import styled from 'styled-components';
import { primaryColor, secondaryColor, defaultTransition } from 'styles/globalStyles';


const DishAddFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 1.5rem;

  background-color: ${secondaryColor};
  outline: 1px solid #885c5c14;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 18px 2px rgba(136, 92, 92, 0.14);

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    width: calc(100% - 4rem);
  }
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
  background-color: ${secondaryColor};
  border: 3px solid ${primaryColor};
  border-radius: 6px;
  color: ${primaryColor};
  cursor: pointer;
  transition: ${defaultTransition};

  &:hover {
    background-color: ${primaryColor};
    color: ${secondaryColor};
  }
`;

export { DishAddFormStyled, FormHeader, FormHeaderText, Button };
