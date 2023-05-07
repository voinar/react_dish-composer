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
import getComponentVisibility from 'utils/getComponentVisibility';

const ConfirmationMessage = () => {
  const { confirmationMessageTitle, confirmationMessageContent, isVisible } =
    useAppSelector((state) => state.confirmationMessage);

  return (
    <ConfirmationMessageStyled style={getComponentVisibility(isVisible)}>
      <ConfirmationMessageHeader>
        <ConfirmationMessageIcon src={IconSuccess} alt="Success" />
        <ConfirmationMessageTitle>
          Success: {confirmationMessageTitle}
        </ConfirmationMessageTitle>
      </ConfirmationMessageHeader>
      <ConfirmationMessageContent>
        {Object.entries(confirmationMessageContent).map(([key, value]) => (
          <ConfirmationMessageContentRow key={key}>
            {key}: <span>{value}</span>
          </ConfirmationMessageContentRow>
        ))}
      </ConfirmationMessageContent>
    </ConfirmationMessageStyled>
  );
};

export default ConfirmationMessage;
