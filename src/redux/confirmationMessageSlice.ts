import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ApiResponseObj } from 'types/apiResponseObj';

interface ConfirmationMessageState {
  confirmationMessageTitle: string;
  confirmationMessageContent: ApiResponseObj;
  isVisible: boolean;
}

const initialState: ConfirmationMessageState = {
  confirmationMessageTitle: 'Confirmation',
  confirmationMessageContent: {
    name: ['ensure this value has at least 3 characters'],
    type: ['field required'],
    preparation_time: ['field required'],
  },
  isVisible: false,
};

export const confirmationMessageSlice = createSlice({
  name: 'confirmationMessage',
  initialState,
  reducers: {
    updateConfirmationMessageTitle: (state, action: PayloadAction<string>) => {
      return { ...state, confirmationMessageTitle: action.payload };
    },
    updateConfirmationMessageContent: (state, action: PayloadAction<object>) => {
      return { ...state, confirmationMessageContent: action.payload };
    },
    setConfirmationAsVisible: (state) => {
      return { ...state, isVisible: true };
    },
    setConfirmationAsHidden: (state) => {
      return { ...state, isVisible: false };
    },
  },
});

export const {
  updateConfirmationMessageTitle,
  updateConfirmationMessageContent,
  setConfirmationAsVisible,
  setConfirmationAsHidden,
} = confirmationMessageSlice.actions;

export default confirmationMessageSlice.reducer;
