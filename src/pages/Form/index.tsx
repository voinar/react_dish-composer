import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import DishAddForm from 'components/DishAddForm';
import { FormStyled } from './styles';
import axios from 'axios';
import {
  updateErrorMessageTitle,
  updateErrorMessageContent,
  setErrorAsVisible,
  setErrorAsHidden,
} from 'redux/errorMessageSlice';
import {
  updateConfirmationMessageTitle,
  updateConfirmationMessageContent,
  setConfirmationAsVisible,
  setConfirmationAsHidden,
} from 'redux/confirmationMessageSlice';
import ErrorMessage from 'components/ErrorMessage';
import ConfirmationMessage from 'components/ConfirmationMessage';
import { RequestObject } from 'types/requestObject';

const Form = () => {
  const dispatch = useAppDispatch();
  const isErrorMessageVisible = useAppSelector(
    (state) => state.errorMessage.isVisible
  );
  const isConfirmationMessageVisible = useAppSelector(
    (state) => state.confirmationMessage.isVisible
  );

  // type ProcessEnv = { [key: string]: string | undefined };

  const requestUrl: any = process.env.REACT_APP_POST_REQUEST_URL;

  const submitForm = (values: RequestObject) => {
    const requestObject = {
      name: values.name,
      preparation_time: values.preparation_time,
      type: values.type,
      no_of_slices: values?.no_of_slices,
      diameter: values?.diameter,
      spiciness_scale: values?.spiciness_scale,
      slices_of_bread: values?.slices_of_bread,
    };

    console.log('Submit', requestObject);

    axios
      .post(requestUrl, requestObject)
      .then(function (response) {
        dispatch({ type: setErrorAsHidden });
        dispatch({ type: setConfirmationAsVisible });
        dispatch({
          type: updateConfirmationMessageTitle,
          payload: response.status,
        });
        dispatch({
          type: updateConfirmationMessageContent,
          payload: response.data,
        });
      })
      .catch(function (error) {
        if (error.response) {
          dispatch({ type: setConfirmationAsHidden });
          dispatch({ type: setErrorAsVisible });
          dispatch({
            type: updateErrorMessageTitle,
            payload: error.response.status,
          });
          dispatch({
            type: updateErrorMessageContent,
            payload: error.response.data,
          });
        }
      });
  };

  return (
    <FormStyled>
      <DishAddForm onSubmit={submitForm} />
      {isErrorMessageVisible && <ErrorMessage />}
      {isConfirmationMessageVisible && <ConfirmationMessage />}
    </FormStyled>
  );
};

export default Form;
