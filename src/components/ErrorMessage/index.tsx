import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { setErrorAsHidden } from 'redux/errorMessageSlice';
import getComponentVisibility from 'utils/getComponentVisibility';
import {
  ErrorMessageStyled,
  ErrorMessageHeader,
  ErrorMessageIcon,
  ErrorMessageTitle,
  ErrorMessageContent,
  ErrorMessageContentRow,
  ErrorMessageButton,
} from './styles';
import IconError from 'img/icons/icon-error.svg';
import IconClose from 'img/icons/icon-close.svg';

// Maps over error values returned from API.
const ErrorMessage: () => JSX.Element = () => {
  const { errorMessageTitle, errorMessageContent, isVisible } = useAppSelector(
    (state) => state.errorMessage
  );

  const dispatch = useAppDispatch();

  const hideMessage = () => {
    dispatch(setErrorAsHidden());
  };

  return (
    <ErrorMessageStyled style={getComponentVisibility(isVisible)}>
      <ErrorMessageHeader>
        <ErrorMessageIcon src={IconError} alt="Error" />
        <ErrorMessageTitle>Error: {errorMessageTitle}</ErrorMessageTitle>
        <ErrorMessageButton onClick={hideMessage}>
          <img src={IconClose} alt="Close" />
        </ErrorMessageButton>
      </ErrorMessageHeader>
      <ErrorMessageContent>
        {Object.keys(errorMessageContent).map((key) => (
          // Map over error values returned from API.
          <li key={key}>
            {errorMessageContent[key].map(
              (errorMessage: string, index: number) => (
                <ErrorMessageContentRow key={key}>
                  <p>{key}</p>
                  <span>{errorMessage}</span>
                </ErrorMessageContentRow>
              )
            )}
          </li>
        ))}
      </ErrorMessageContent>
    </ErrorMessageStyled>
  );
};

export default ErrorMessage;
