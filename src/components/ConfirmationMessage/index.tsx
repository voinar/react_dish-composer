import { useAppSelector } from 'hooks/hooks';
import {
  ConfirmationMessageStyled,
  ConfirmationMessageHeader,
  ConfirmationMessageIcon,
  ConfirmationMessageTitle,
  ConfirmationMessageContent,
  ConfirmationMessageContentRow,
} from './styles';
import IconSuccess from 'img/icons/icon-success.svg';

const ConfirmationMessage = () => {
  type ConfirmationObj = {
    [key: string]: string[];
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
    useAppSelector(
      (state) => state.confirmationMessage.confirmationMessageContent
    );

  return (
    <ConfirmationMessageStyled>
      <ConfirmationMessageHeader>
        <ConfirmationMessageIcon src={IconSuccess} alt="Success" />
        <ConfirmationMessageTitle>
          Success: {confirmationMessageTitle}
        </ConfirmationMessageTitle>
      </ConfirmationMessageHeader>
      {/* {JSON.stringify(confirmationMessageContent)} */}
      <ConfirmationMessageContent>
        {Object.keys(confirmationMessageContent).map((key, index) => {
          return (
            <ConfirmationMessageContentRow key={index}>
              <p>
                {key}: <span>{confirmationMessageContent[key]}</span>
              </p>
            </ConfirmationMessageContentRow>
          );
        })}
      </ConfirmationMessageContent>
      {/* <ConfirmationMessageContent>
        {Object.keys(confirmationMessageContent).map((key) => (
          <ConfirmationMessageContentRow key={key}>
            {confirmationMessageContent[key].map(
              (errorMessage: any, index: number) => (
                <>
                  <p key={index}>{key}</p>
                  <span>{errorMessage}</span>
                </>
              )
            )}
          </ConfirmationMessageContentRow>
        ))}
      </ConfirmationMessageContent> */}
    </ConfirmationMessageStyled>
  );
};

export default ConfirmationMessage;
