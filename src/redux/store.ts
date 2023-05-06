import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import errorMessageSlice from 'redux/errorMessageSlice';
import confirmationMessageSlice from 'redux/confirmationMessageSlice';

export const store = configureStore({
  reducer: {
    errorMessage: errorMessageSlice,
    confirmationMessage: confirmationMessageSlice,
    form: formReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
