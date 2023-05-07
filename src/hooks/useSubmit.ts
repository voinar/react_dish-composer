import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import axios from 'axios';
import * as ErrorMessageSlice from 'redux/errorMessageSlice';
import * as ConfirmationMessageSlice from 'redux/confirmationMessageSlice';
import { RequestObject } from 'types/requestObject';
import { ApiResponseObj } from 'types/apiResponseObj';

// Sends the form data to the server on condition that it meets the validation criteria.
export const useSubmit = () => {
  const dispatch = useAppDispatch();
  const requestUrl: string = process.env.REACT_APP_POST_REQUEST_URL!;

  const formContent = useAppSelector((state) => state.form.form);
  const preparationTime = formContent?.values?.preparation_time;

  // Function for local validation of time input. If string length is more than 5 then allow the form to be sent. Otherwise display error message. Returns boolean to be used inside submitForm function.
  const validateTimeInput = () => {
    if (preparationTime?.length > 5) {
      return true;
    }
    dispatch(ConfirmationMessageSlice.setConfirmationAsHidden());
    dispatch(ErrorMessageSlice.updateErrorMessageTitle('time input'));
    dispatch(
      ErrorMessageSlice.updateErrorMessageContent({
        oops: ['Make sure that you include seconds in your time input.'],
      })
    );
    dispatch(ErrorMessageSlice.setErrorAsVisible());
    return false;
  };

  // Form submit function.
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

    // Call validation function when user clicks 'submit'. Take the boolean value returned by the validation function as condition. If 'true' then send the form. Otherwise display error message.
    if (!validateTimeInput()) {
      return null;
    } else {
      axios
        .post(requestUrl, requestObject)
        
        // Handle successful form submission & display success message.
        .then(function (response: ApiResponseObj) {
          dispatch(ErrorMessageSlice.setErrorAsHidden());
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
          dispatch(ConfirmationMessageSlice.setConfirmationAsVisible());
        })

        // Handle form errors returned from API & display error message.
        .catch(function (error) {
          if (error.response) {
            dispatch(ConfirmationMessageSlice.setConfirmationAsHidden());
            dispatch(
              ErrorMessageSlice.updateErrorMessageTitle(error.response.status)
            );
            dispatch(
              ErrorMessageSlice.updateErrorMessageContent(error.response.data)
            );
            dispatch(ErrorMessageSlice.setErrorAsVisible());
          }
        });
    }
  };

  return submitForm;
};
