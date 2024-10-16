import React from 'react';
import newLogo from '../assets/images/newLogo.png';

<img src={newLogo} className="logo" alt="Logo" />


function Navbar({ showLoginModal, isAdmin, user, logout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/item/index">
          <img src={newLogo} className="logo" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!user && (
              <li className="nav-item" id="loginBtnContainer">
                <button className="btn btn-primary" onClick={showLoginModal}>Login</button>
              </li>
            )}
            {user && (
              <li className="nav-item dropdown" id="userDropdown">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdownLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img id="userAvatar" src={user.avatarUrl} alt="Avatar" style={{ width: '30px', borderRadius: '50%' }} /> <span id="userName">{user.name}</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="userDropdownLink">
                  <li><a className="dropdown-item" href="/profile">Profile</a></li>
                  <li><a className="dropdown-item" href="#" onClick={logout}>Logout</a></li>
                </ul>
              </li>
            )}
            {isAdmin && (
              <li className="nav-item" id="adminPanel">
                <a className="btn btn-danger" href="/admin/index">Admin Panel</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
