import React from 'react';

// Sample data for featured products
const products = [
  {
    id: 1,
    imgSrc: 'https://via.placeholder.com/200x200',
    title: 'Featured Product 1',
    price: '$29.99',
    sold: 120,
  },
  {
    id: 2,
    imgSrc: 'https://via.placeholder.com/200x200',
    title: 'Featured Product 2',
    price: '$39.99',
    sold: 150,
  },
  {
    id: 3,
    imgSrc: 'https://via.placeholder.com/200x200',
    title: 'Featured Product 3',
    price: '$19.99',
    sold: 90,
  },
  {
    id: 4,
    imgSrc: 'https://via.placeholder.com/200x200',
    title: 'Featured Product 4',
    price: '$49.99',
    sold: 200,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="bg-white py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {products.map(product => (
          <div key={product.id} className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center">
            <img 
              src={product.imgSrc} 
              alt={product.title} 
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-lg font-bold text-gray-800 mb-2">{product.price}</p>
            <p className="text-sm text-gray-600 mb-4">Sold: {product.sold}</p>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
