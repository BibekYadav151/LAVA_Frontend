import React from 'react';

const Footer = () => {
  return (
<footer className="bg-white py-6">
<div className="container mx-auto px-6">
  <div className="flex justify-between">
    <div className="w-1/3">
      <h5 className="font-bold text-lg">Store</h5>
      <ul>
        <li><a href="#" className="text-gray-600 hover:text-blue-500">About us</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-500">Find store</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-500">Categories</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-500">Blogs</a></li>
      </ul>
    </div>
    <div className="w-1/3">
      <h5 className="font-bold text-lg">Information</h5>
      <ul>
        <li><a href="#" className="text-gray-600 hover:text-blue-500">Help center</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-500">Money refund</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-500">Shipping info</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-500">Refunds</a></li>
      </ul>
    </div>
    <div className="w-1/3">
      <h5 className="font-bold text-lg">Support</h5>
      <ul>
        <li><a href="#" className="text-gray-600 hover:text-blue-500">Help center</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-500">Documents</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-500">Account restore</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-500">My orders</a></li>
      </ul>
    </div>
  </div>
  <div className="mt-4 text-center">
    <p className="text-gray-600">© 2023 Copyright: MDBootstrap.com</p>
    <div className="mt-2">
      <a href="#" className="text-gray-600 hover:text-blue-500">English</a>
    </div>
  </div>
</div>
</footer>
  );
};

export default Footer;
