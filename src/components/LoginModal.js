import React from 'react';

function LoginModal({ showModal, closeModal, login }) {
  if (!showModal) {
    return null;
  }

  return (
    <div id="loginModal" className="modal" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="loginForm">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" required />
              </div>
              <button type="button" className="btn btn-primary" onClick={login}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
