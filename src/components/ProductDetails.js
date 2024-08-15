import React, { useState } from 'react';

const ProductDetails = () => {
  const [isShippingVisible, setIsShippingVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  // Static product data
  const product = {
    title: 'Sample Product',
    image1: 'https://via.placeholder.com/300',
    image2: 'https://via.placeholder.com/300',
    additionalImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    color: 'Red',
    colorClass: 'bg-red-500',
    size: 'Medium',
    description: 'This is a sample product description.',
    code: 'SP-1234',
    length: '30cm',
    height: '20cm',
    depth: '10cm',
    composition: '100% Cotton',
  };

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      {/* Desktop Images */}
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img className="w-full" alt="Product Image 1" src={product.image1} />
        <img className="mt-6 w-full" alt="Product Image 2" src={product.image2} />
      </div>

      {/* Mobile Images */}
      <div className="md:hidden">
        <img className="w-full" alt="Product Image 1" src={product.image1} />
        <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
          {product.additionalImages && product.additionalImages.length > 0 ? (
            product.additionalImages.map((img, index) => (
              <img
                key={index}
                alt={`Additional Image ${index + 1}`}
                className="md:w-48 md:h-48 w-full"
                src={img}
              />
            ))
          ) : (
            <p className="text-gray-500">No additional images available</p>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">Balenciaga Fall Collection</p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
            {product.title}
          </h1>
        </div>

        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Colours</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600">{product.color}</p>
            <div className={`w-6 h-6 ml-3 mr-4 cursor-pointer ${product.colorClass}`}></div>
            <svg
              className="cursor-pointer text-gray-300"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Size</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 mr-3">{product.size}</p>
            <svg
              className="text-gray-300 cursor-pointer"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <button className="bg-gray-800 text-white w-full py-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex items-center justify-center">
          <svg
            className="mr-3 text-white"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M4.66699 4.83333V4.84166" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.333 11.5V11.5083" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Check availability in store
        </button>

        <div className="mt-7">
          <p className="text-base leading-normal text-gray-600 mt-7">{product.description}</p>
          <p className="text-base leading-4 mt-7 text-gray-600">Product Code: {product.code}</p>
          <p className="text-base leading-4 mt-4 text-gray-600">Length: {product.length}</p>
          <p className="text-base leading-4 mt-4 text-gray-600">Height: {product.height}</p>
          <p className="text-base leading-4 mt-4 text-gray-600">Depth: {product.depth}</p>
          <p className="text-base leading-normal mt-4 text-gray-600">Composition: {product.composition}</p>
        </div>

        <div className="border-t border-b py-4 mt-7 border-gray-200">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsShippingVisible(!isShippingVisible)}
          >
            <p className="text-base leading-4 text-gray-800">Shipping and returns</p>
            <button
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
              aria-label="toggle shipping and returns"
            >
              <svg
                className={`transform text-gray-300 ${isShippingVisible ? 'rotate-180' : ''}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L5 5L1 1"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {isShippingVisible && (
            <div className="pt-4 text-base leading-normal pr-12 mt-4 text-gray-600">
              You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable.
            </div>
          )}
        </div>

        <div className="border-b py-4 border-gray-200">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsContactVisible(!isContactVisible)}
          >
            <p className="text-base leading-4 text-gray-800">Contact us</p>
            <button
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
              aria-label="toggle contact us"
            >
              <svg
                className={`transform text-gray-300 ${isContactVisible ? 'rotate-180' : ''}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L5 5L1 1"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {isContactVisible && (
            <div className="pt-4 text-base leading-normal pr-12 mt-4 text-gray-600">
              If you have any questions on how to return your item to us, contact us.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
