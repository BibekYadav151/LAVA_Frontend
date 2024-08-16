import React from 'react';

const SingleCategory = () => {
  // Static category data
  const category = {
    name: 'Electronics',
    products: [
      {
        id: 1,
        name: 'Smartphone',
        price: '$599',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        name: 'Laptop',
        price: '$999',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        name: 'Smartwatch',
        price: '$199',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 4,
        name: 'Headphones',
        price: '$99',
        image: 'https://via.placeholder.com/150',
      },
    ],
  };

  return (
    <div className="py-12 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{category.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-medium text-gray-900">{product.name}</h3>
            <p className="mt-2 text-gray-600">{product.price}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
