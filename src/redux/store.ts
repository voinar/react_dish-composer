import { configureStore } from '@reduxjs/toolkit';
import formSlice from 'features/form/formSlice';
import { reducer as formReducer } from 'redux-form';

export const store = configureStore({
  reducer: {
    counter: formSlice,
    form: formReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
