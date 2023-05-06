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
import { ApiResponseObj } from 'types/apiResponseObj';

const ErrorMessage = () => {
  const errorMessageTitle = useAppSelector(
    (state) => state.errorMessage.errorMessageTitle
  );
  const errorMessageContent: ApiResponseObj =
    // {
    //   name: ['ensure this value has at least 3 characters'],
    //   type: ['field required'],
    //   preparation_time: ['field required'],
    // };
    // {
    //   name: ['12'],
    //   preparation_time: ['11:11:01'],
    //   type: ['sandwich'],
    //   slices_of_bread: ['2'],
    // }
    useAppSelector((state) => state.errorMessage.errorMessageContent);

  // console.log(
  //   'errormsg',
  //   errorMessageContent,
  //   'stateerr',
  //   useAppSelector((state) => state.errorMessage.errorMessageContent)
  // );

  return (
    <ErrorMessageStyled>
      <ErrorMessageHeader>
        <ErrorMessageIcon src={IconError} alt="Error" />
        <ErrorMessageTitle>Error: {errorMessageTitle}</ErrorMessageTitle>
      </ErrorMessageHeader>
      <ErrorMessageContent>
        {Object.keys(errorMessageContent).map((key) => (
          <li key={key}>
            {errorMessageContent[key].map(
              (errorMessage: any, index: number) => (
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
