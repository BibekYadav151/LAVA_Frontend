import React from 'react';

const CategoriesList = () => {
  // Sample data for categories
  const categories = [
    { id: 1, imgSrc: 'https://via.placeholder.com/200', title: 'Category 1' },
    { id: 2, imgSrc: 'https://via.placeholder.com/200', title: 'Category 2' },
    { id: 3, imgSrc: 'https://via.placeholder.com/200', title: 'Category 3' },
    { id: 4, imgSrc: 'https://via.placeholder.com/200', title: 'Category 4' },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-center mb-4">Categories</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow rounded-lg p-4 text-center">
            <img
              src={category.imgSrc}
              alt={category.title}
              className="w-32 h-32 object-cover border border-gray-300 rounded-md mx-auto"
            />
            <h3 className="text-lg font-semibold mt-2">{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesList;
