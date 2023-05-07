import { ApiResponseObj } from 'types/apiResponseObj';

export interface ConfirmationMessageState {
  confirmationMessageTitle: string;
  confirmationMessageContent: ApiResponseObj;
  isVisible: boolean;
}