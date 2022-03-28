import React from "react";
import "./Header.css";
const Headers = ({ user }) => {
  return (
    <div id="header">
      <h1>Book shop</h1>
      <nav className="navbar">
        <a href="/">HOME</a>
        <a href="/order">ORDER</a>
        <a href="/admin">ADMIN</a>
        <a href="/deal">DEAL</a>
        <a href="/login">
          {user.displayName ? (
            <button id="btn">{user.displayName}</button>
          ) : (
            <button id="btn">LOG IN</button>
          )}
        </a>
      </nav>
    </div>
  );
};

export default Headers;
