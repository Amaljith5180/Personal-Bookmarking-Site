import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark } from '../../features/bookmarksSlice';

const BookmarkForm = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && url) {
      dispatch(addBookmark({
        id: Date.now(),
        title,
        url,
        user: user.username,
        addedTime: new Date().toLocaleString()
      }));
      setTitle('');
      setUrl('');
    }
  };

  const styles = {
    form: {
      background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: 'none',
    },
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      background: '#4CAF50',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        style={styles.input}
      />
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URL"
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add Bookmark</button>
    </form>
  );
};

export default BookmarkForm;
