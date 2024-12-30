import React from 'react';
import { BellIcon } from '@heroicons/react/outline';
import '../index.css';

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Toggle Button */}
        <button onClick={toggleSidebar} className="navbar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Profile Section */}
        <div className="profile-section">
          <BellIcon className="h-5 w-5 text-gray-500" />
          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            className="profile-image"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
