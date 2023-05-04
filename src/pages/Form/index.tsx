import DishAddForm from 'components/DishAddForm';
import { FormStyled } from './styles';

const submit = (values: any) => {
  // e.preventDefault();
  console.log('Submit', values);
};

const Form = () => {
  return (
    <FormStyled>
      <h1>Add dish form</h1>
      <DishAddForm onSubmit={submit} />
    </FormStyled>
  );
};

export default Form;
