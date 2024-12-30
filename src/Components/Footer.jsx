import React from 'react';

function Footer() {
  return (
    <footer className="bg-white shadow-md py-4 fixed bottom-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
