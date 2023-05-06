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
import { ApiResponseObj } from 'types/apiResponseObj';

const ConfirmationMessage = () => {
  const confirmationMessageTitle = useAppSelector(
    (state) => state.confirmationMessage.confirmationMessageTitle
  );
  const confirmationMessageContent: ApiResponseObj = useAppSelector(
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
              {key}: <span>{confirmationMessageContent[key]}</span>
            </ConfirmationMessageContentRow>
          );
        })}
      </ConfirmationMessageContent>
    </ConfirmationMessageStyled>
  );
};

export default ConfirmationMessage;
