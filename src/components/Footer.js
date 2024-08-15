import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; 2024 MyShop. All rights reserved.</p>
        <p>
          <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a> | <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
