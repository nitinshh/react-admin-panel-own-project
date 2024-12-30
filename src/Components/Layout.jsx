import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex pt-16">
        {/* Sidebar */}
        <Sidebar isCollapsed={isCollapsed} />

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 max-w-7xl mx-auto p-6 ${
            isCollapsed ? 'ml-20' : 'ml-72'
          }`}
        >
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
