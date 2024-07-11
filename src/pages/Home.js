import React from 'react';
import { useSelector } from 'react-redux';
import BookmarkForm from '../components/Bookmarks/BookmarkForm';
import BookmarkList from '../components/Bookmarks/BookmarkList';

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundImage: 'url("https://img.freepik.com/premium-photo/rich-colorfull-background-texture-perfect-wallpaper-design_440279-10142.jpg?size=626&ext=jpg&ga=GA1.1.450227578.1720010139&semt=ais_user")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
      color: 'white',
      textAlign: 'center',
    },
    title: {
      fontSize: '3em',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    formSection: {
      background: 'linear-gradient(#c33764, #1d2671)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '600px',
      marginBottom: '20px',
      color: 'white',
    },
    loginMessage: {
      fontSize: '1.5em',
      color: '#f8f9fa',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Bookmarking Site</h1>
      {user ? (
        <div style={styles.formSection}>
          <BookmarkForm />
          <BookmarkList />
        </div>
      ) : (
        <p style={styles.loginMessage}>Please log in to manage your bookmarks.</p>
      )}
    </div>
  );
};

export default Home;
