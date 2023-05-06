import { useAppSelector } from 'hooks/hooks';
import {
  ErrorMessageStyled,
  ErrorMessageHeader,
  ErrorMessageIcon,
  ErrorMessageTitle,
  ErrorMessageContent,
  ErrorMessageContentRow,
} from './styles';
import IconError from 'img/icons/icon-error.svg';
import getComponentVisibility from 'utils/getComponentVisibility';

const ErrorMessage = () => {
  const { errorMessageTitle, errorMessageContent, isVisible } = useAppSelector(
    (state) => state.errorMessage
  );
  return (
    <ErrorMessageStyled style={getComponentVisibility(isVisible)}>
      <ErrorMessageHeader>
        <ErrorMessageIcon src={IconError} alt="Error" />
        <ErrorMessageTitle>Error: {errorMessageTitle}</ErrorMessageTitle>
      </ErrorMessageHeader>
      <ErrorMessageContent>
        {Object.keys(errorMessageContent).map((key) => (
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
