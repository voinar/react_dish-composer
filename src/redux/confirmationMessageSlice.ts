import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ConfirmationMessageState } from 'types/confirmationMessageState';

const initialState: ConfirmationMessageState = {
  confirmationMessageTitle: 'Confirmation',
  confirmationMessageContent: {
    name: ['default']
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
