import { ApiResponseObj } from 'types/apiResponseObj';

export type ErrorMessageState = {
  errorMessageTitle: string;
  errorMessageContent: ApiResponseObj;
  isVisible: boolean;
};
