import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#777576', position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
      <div className="text-center p-2" style={{ backgroundColor: 'rgba(126, 126, 201, 0.5)' }}>
        © 2023 Copyright:
        <a className="text-white" href="#">ROVER CAR CLUB OF AUSTRALIA UP ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
