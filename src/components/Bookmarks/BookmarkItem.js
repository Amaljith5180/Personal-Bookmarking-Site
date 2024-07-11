import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBookmark, editBookmark } from '../../features/bookmarksSlice';

const BookmarkItem = ({ bookmark }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [title, setTitle] = useState(bookmark.title);
  const [url, setUrl] = useState(bookmark.url);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editBookmark({ ...bookmark, title, url }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteBookmark(bookmark.id));
  };

  const styles = {
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: 'none',
    },
    button: {
      padding: '5px 10px',
      borderRadius: '5px',
      border: 'none',
      background: '#4CAF50',
      color: 'white',
      cursor: 'pointer',
      fontSize: '14px',
      margin: '5px',
    },
    button1: {
      padding: '5px 10px',
      borderRadius: '5px',
      border: 'none',
      background: 'red',
      color: 'white',
      cursor: 'pointer',
      fontSize: '14px',
      margin: '5px',
    },
  };

  return (
    <tr>
      {isEditing ? (
        <td colSpan="4">
          <form onSubmit={handleEdit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Save</button>
            <button type="button" onClick={() => setIsEditing(false)} style={styles.button}>
              Cancel
            </button>
          </form>
        </td>
      ) : (
        <>
          <td>{bookmark.title}</td>
          <td>{bookmark.url}</td>
          <td>{bookmark.addedTime}</td>
          <td>
            <button onClick={() => setIsEditing(true)} style={styles.button1}>Edit</button>
            {isConfirmingDelete ? (
              <>
                <button onClick={handleDelete} style={styles.button}>Confirm Delete</button>
                <button onClick={() => setIsConfirmingDelete(false)} style={styles.button}>Cancel</button>
              </>
            ) : (
              <button onClick={() => setIsConfirmingDelete(true)} style={styles.button}>Delete</button>
            )}
          </td>
        </>
      )}
    </tr>
  );
};

export default BookmarkItem;
