import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ConfirmationMessageState {
  confirmationMessageTitle: string;
  confirmationMessageContent: {};
  isVisible: boolean;
}

const initialState: ConfirmationMessageState = {
  confirmationMessageTitle: 'Error',
  confirmationMessageContent: {},
  isVisible: false,
};

export const confirmationMessageSlice = createSlice({
  name: 'confirmationMessage',
  initialState,
  reducers: {
    updateConfirmationMessageTitle: (state, action: PayloadAction<string>) => {
      state.confirmationMessageTitle = action.payload;
    },
    updateConfirmationMessageContent: (state, action: PayloadAction<string>) => {
      state.confirmationMessageContent = action.payload;
    },
    setConfirmationAsVisible: (state) => {
      state.isVisible = true;
    },
    setConfirmationAsHidden: (state) => {
      state.isVisible = false;
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
