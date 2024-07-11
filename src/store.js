import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import bookmarksReducer from './features/bookmarksSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bookmarks: bookmarksReducer,
  },
});
