import { useAppDispatch } from 'hooks/hooks';
import DishAddForm from 'components/DishAddForm';
import { FormStyled } from './styles';
import axios from 'axios';
import * as ErrorMessageSlice from 'redux/errorMessageSlice';
import * as ConfirmationMessageSlice from 'redux/confirmationMessageSlice';
import ErrorMessage from 'components/ErrorMessage';
import ConfirmationMessage from 'components/ConfirmationMessage';
import { RequestObject } from 'types/requestObject';
import { ApiResponseObj } from 'types/apiResponseObj';

const Form = () => {
  const dispatch = useAppDispatch();
  const requestUrl: string = process.env.REACT_APP_POST_REQUEST_URL!;

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

    axios
      .post(requestUrl, requestObject)
      .then(function (response: ApiResponseObj) {
        dispatch(ErrorMessageSlice.setErrorAsHidden());
        dispatch(ConfirmationMessageSlice.setConfirmationAsVisible());
        dispatch(
          ConfirmationMessageSlice.updateConfirmationMessageTitle(
            response.status
          )
        );
        dispatch(
          ConfirmationMessageSlice.updateConfirmationMessageContent(
            response.data
          )
        );
      })
      .catch(function (error) {
        if (error.response) {
          dispatch(ConfirmationMessageSlice.setConfirmationAsHidden());
          dispatch(ErrorMessageSlice.setErrorAsVisible());
          dispatch(
            ErrorMessageSlice.updateErrorMessageTitle(error.response.status)
          );
          dispatch(
            ErrorMessageSlice.updateErrorMessageContent(error.response.data)
          );
        }
      });
  };

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
