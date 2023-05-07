import { ApiResponseObj } from 'types/apiResponseObj';

export interface ErrorMessageState {
  errorMessageTitle: string;
  errorMessageContent: ApiResponseObj;
  isVisible: boolean;
};
