import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { setConfirmationAsHidden } from 'redux/confirmationMessageSlice';
import getComponentVisibility from 'utils/getComponentVisibility';
import {
  ConfirmationMessageStyled,
  ConfirmationMessageHeader,
  ConfirmationMessageIcon,
  ConfirmationMessageTitle,
  ConfirmationMessageContent,
  ConfirmationMessageContentRow,
  ConfirmationMessageButton,
} from './styles';
import IconSuccess from 'img/icons/icon-success.svg';
import IconClose from 'img/icons/icon-close.svg';

// Maps over list of values returned from a successful API request.
const ConfirmationMessage: () => JSX.Element = () => {
  const { confirmationMessageTitle, confirmationMessageContent, isVisible } =
    useAppSelector((state) => state.confirmationMessage);

  const dispatch = useAppDispatch();

  const hideMessage = () => {
    dispatch(setConfirmationAsHidden());
  };

  return (
    <ConfirmationMessageStyled style={getComponentVisibility(isVisible)}>
      <ConfirmationMessageHeader>
        <ConfirmationMessageIcon src={IconSuccess} alt="Success" />
        <ConfirmationMessageTitle>
          Success: {confirmationMessageTitle}
        </ConfirmationMessageTitle>
        <ConfirmationMessageButton onClick={hideMessage}>
          <img src={IconClose} alt="Close" />
        </ConfirmationMessageButton>
      </ConfirmationMessageHeader>
      <ConfirmationMessageContent>
        {Object.entries(confirmationMessageContent).map(([key, value]) => (
          // Map over list of values returned from a successful API request.
          <ConfirmationMessageContentRow key={key}>
            {key}: <span>{value}</span>
          </ConfirmationMessageContentRow>
        ))}
      </ConfirmationMessageContent>
    </ConfirmationMessageStyled>
  );
};

export default ConfirmationMessage;
