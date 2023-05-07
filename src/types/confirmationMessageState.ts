import { ApiResponseObj } from 'types/apiResponseObj';

export type ConfirmationMessageState = {
  confirmationMessageTitle: string;
  confirmationMessageContent: ApiResponseObj;
  isVisible: boolean;
}