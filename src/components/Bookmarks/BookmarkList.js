import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookmarkItem from './BookmarkItem';

const BookmarkList = () => {
  const bookmarks = useSelector((state) => state.bookmarks.items);
  const user = useSelector((state) => state.auth.user);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const bookmarksPerPage = 3;

  // Filter bookmarks by the logged-in user and search query
  const filteredBookmarks = bookmarks.filter(
    (bookmark) => bookmark.user === user.username && (bookmark.title.includes(search) || bookmark.url.includes(search))
  );

  // Get current bookmarks based on pagination
  const indexOfLastBookmark = currentPage * bookmarksPerPage;
  const indexOfFirstBookmark = indexOfLastBookmark - bookmarksPerPage;
  const currentBookmarks = filteredBookmarks.slice(indexOfFirstBookmark, indexOfLastBookmark);

  // Pagination controls
  const totalPages = Math.ceil(filteredBookmarks.length / bookmarksPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const styles = {
    container: {
      background: 'url("https://img.freepik.com/free-photo/2d-graphic-wallpaper-with-colorful-grainy-gradients_23-2151001577.jpg?size=626&ext=jpg&ga=GA1.1.450227578.1720010139&semt=ais_user") no-repeat center center',
      backgroundSize: 'cover',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: 'none',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      padding: '10px',
      borderBottom: '1px solid #ccc',
      background: '#4CAF50',
      color: 'white',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #ccc',
      textAlign: 'center',
      background: '#f9f9f9',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
    },
    button: {
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      background: '#4CAF50',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
      margin: '0 5px',
    },
    span: {
      margin: '0 10px',
      color: '#fff',
    },
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search bookmarks"
        style={styles.input}
      />
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>URL</th>
            <th style={styles.th}>Added Time</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBookmarks.map((bookmark) => (
            <BookmarkItem key={bookmark.id} bookmark={bookmark} />
          ))}
        </tbody>
      </table>
      <div style={styles.pagination}>
        <button onClick={handlePrevious} disabled={currentPage === 1} style={styles.button}>
          Previous
        </button>
        <span style={styles.span}> Page {currentPage} of {totalPages} </span>
        <button onClick={handleNext} disabled={currentPage === totalPages} style={styles.button}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BookmarkList;
