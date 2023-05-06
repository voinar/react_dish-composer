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

// interface IRequestObject {
//   name: string;
//   preparation_time: string;
//   type: string;
//   no_of_slices: number;
//   diameter: number;
//   spiciness_scale: number;
//   slices_of_bread: number;
// }

const Form = () => {
  const dispatch = useAppDispatch();
  const isErrorMessageVisible = useAppSelector(
    (state) => state.errorMessage.isVisible
  );
  const isConfirmationMessageVisible = useAppSelector(
    (state) => state.confirmationMessage.isVisible
  );
  const requestUrl = process.env.REACT_APP_POST_REQUEST_URL;

  const submitForm = (values) => {
    const requestObject = {
      name: values.name,
      preparation_time: values.preparation_time,
      type: values.type,
      no_of_slices: values?.no_of_slices,
      diameter: values?.diameter,
      spiciness_scale: values?.spiciness_scale,
      slices_of_bread: values?.slices_of_bread,
    };
    // {"name": "HexOcean pizza", "preparation_time": "01:30:22", "type": "pizza", "no_of_slices": 4, "diameter": 33.4}

    console.log('Submit', requestObject);

    axios
      .post(requestUrl, requestObject)
      .then(function (response) {
        console.log(response.data);
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
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
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);

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
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };

  return (
    <FormStyled>
      <DishAddForm onSubmit={submitForm} />
      {isErrorMessageVisible && <ErrorMessage />}
      {isConfirmationMessageVisible && <ConfirmationMessage />}
      <button
        onClick={() => {
          dispatch({ type: setErrorAsHidden });
        }}
      >
        setHidden
      </button>
      <button
        onClick={() => {
          dispatch({ type: setErrorAsVisible });
        }}
      >
        setVisible
      </button>
    </FormStyled>
  );
};

export default Form;
