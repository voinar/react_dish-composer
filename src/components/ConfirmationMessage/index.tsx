import { useAppSelector } from 'hooks/hooks';
import {
  ConfirmationMessageStyled,
  ConfirmationMessageHeader,
  ConfirmationMessageIcon,
  ConfirmationMessageTitle,
  ConfirmationMessageContent,
  ConfirmationMessageContentRow,
} from './styles';
// import IconError from 'img/icons/icon-error.svg';

const ConfirmationMessage = () => {
  type ConfirmationObj = {
    [key: string]: any,
  };

  const confirmationMessageTitle = useAppSelector(
    (state) => state.confirmationMessage.confirmationMessageTitle
  );
  const confirmationMessageContent: ConfirmationObj =
    // {
    //   name: ['ensure this value has at least 3 characters'],
    //   type: ['field required'],
    //   preparation_time: ['field required'],
    // };
    useAppSelector((state) => state.confirmationMessage.confirmationMessageContent);

  console.log(
    'errormsg',
    confirmationMessageContent,
    'stateerr',
    useAppSelector((state) => state.confirmationMessage.confirmationMessageContent)
  );

  return (
    <ConfirmationMessageStyled>
      <ConfirmationMessageHeader>
        {/* <ConfirmationMessageIcon src={IconError} alt="Error" /> */}
        <ConfirmationMessageTitle>Success: {confirmationMessageTitle}</ConfirmationMessageTitle>
      </ConfirmationMessageHeader>
      <>
      {JSON.stringify(confirmationMessageContent)}
        {/* {Object.keys(confirmationMessageContent).map((key) => (
          <ConfirmationMessageContent key={key}>
            {confirmationMessageContent[key].map(
              (confirmationMessage: any, index: number) => (
                <ConfirmationMessageContentRow>
                  <p key={index}>{key}</p>
                  <span>{confirmationMessage}</span>
                </ConfirmationMessageContentRow>
              )
            )}
          </ConfirmationMessageContent>
        ))} */}
      </>
    </ConfirmationMessageStyled>
  );
};

export default ConfirmationMessage;
