import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = [
    {
      id: '1',
      title: 'Product 1',
      image: 'https://via.placeholder.com/150',
      price: '29.99',
      color: 'Red',
    },
    {
      id: '2',
      title: 'Product 2',
      image: 'https://via.placeholder.com/150',
      price: '49.99',
      color: 'Blue',
    },
    {
      id: '3',
      title: 'Product 3',
      image: 'https://via.placeholder.com/150',
      price: '39.99',
      color: 'Green',
    },
    {
      id: '4',
      title: 'Product 4',
      image: 'https://via.placeholder.com/150',
      price: '59.99',
      color: 'Yellow',
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image || 'https://via.placeholder.com/150'}
                  alt={product.title}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color || 'Color not specified'}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
