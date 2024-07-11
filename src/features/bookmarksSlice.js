import { createSlice } from '@reduxjs/toolkit';

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    items: JSON.parse(localStorage.getItem('bookmarks')) || [],
  },
  reducers: {
    addBookmark: (state, action) => {
      const userBookmarks = state.items.filter(item => item.user === action.payload.user);
      if (userBookmarks.length < 5) {
        state.items.push(action.payload);
        localStorage.setItem('bookmarks', JSON.stringify(state.items));
      } else {
        alert('You can only add up to 5 bookmarks');
      }
    },
    deleteBookmark: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('bookmarks', JSON.stringify(state.items));
    },
    editBookmark: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
        localStorage.setItem('bookmarks', JSON.stringify(state.items));
      }
    },
    setBookmarks: (state, action) => {
      state.items = action.payload;
      localStorage.setItem('bookmarks', JSON.stringify(state.items));
    },
  },
});

export const { addBookmark, deleteBookmark, editBookmark, setBookmarks } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
