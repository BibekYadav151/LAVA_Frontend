import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    window.location.reload();
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {userInfo ? (
          <div>
            <Link to="/profile">{userInfo.name}</Link>
            <Link to="/" onClick={logoutHandler}>
              Logout
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
