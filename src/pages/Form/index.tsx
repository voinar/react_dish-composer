import DishAddForm from 'components/DishAddForm';
import { FormStyled, MessageContainer } from './styles';
import ErrorMessage from 'components/ErrorMessage';
import ConfirmationMessage from 'components/ConfirmationMessage';
import { useSubmit } from 'hooks/useSubmit';

const Form: () => JSX.Element = () => {
  const submitForm = useSubmit();

  return (
    <FormStyled>
      <DishAddForm onSubmit={submitForm} />
      <MessageContainer>
        <ErrorMessage />
        <ConfirmationMessage />
      </MessageContainer>
    </FormStyled>
  );
};

export default Form;
