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

const ErrorMessage = () => {
  type ErrorObj = {
    [key: string]: string[];
  };

  const errorMessageTitle = useAppSelector(
    (state) => state.errorMessage.errorMessageTitle
  );
  const errorMessageContent: ErrorObj =
    // {
    //   name: ['ensure this value has at least 3 characters'],
    //   type: ['field required'],
    //   preparation_time: ['field required'],
    // };
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
          <ErrorMessageContentRow key={key}>
            {errorMessageContent[key].map(
              (errorMessage: any, index: number) => (
                <>
                  <p key={index}>{key}</p>
                  <span>{errorMessage}</span>
                </>
              )
            )}
          </ErrorMessageContentRow>
        ))}
      </ErrorMessageContent>
    </ErrorMessageStyled>
  );
};

export default ErrorMessage;
