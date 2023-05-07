import DishAddForm from 'components/DishAddForm';
import { FormStyled } from './styles';
import ErrorMessage from 'components/ErrorMessage';
import ConfirmationMessage from 'components/ConfirmationMessage';
import { useSubmit } from 'hooks/useSubmit';

const Form = () => {
  const submitForm = useSubmit();

  return (
    <FormStyled>
      <DishAddForm onSubmit={submitForm} />
      <>
        <ErrorMessage />
        <ConfirmationMessage />
      </>
    </FormStyled>
  );
};

export default Form;
