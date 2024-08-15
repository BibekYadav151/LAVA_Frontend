import React from 'react';

const ProductCard = ({ title, imgSrc, price, sold }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="relative">
        {/* Square Image with Border */}
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover border border-gray-300 rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-500 mb-2">Price: ${price}</p>
      <p className="text-gray-500 mb-2">Sold: {sold}</p>
      <div className="flex space-x-2 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
