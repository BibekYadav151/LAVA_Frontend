import React from 'react';

// Sample data for categories
const categories = [
  {
    id: 1,
    imgSrc: 'https://via.placeholder.com/50',
    title: 'Category 1',
  },
  {
    id: 2,
    imgSrc: 'https://via.placeholder.com/50',
    title: 'Category 2',
  },
  {
    id: 3,
    imgSrc: 'https://via.placeholder.com/50',
    title: 'Category 3',
  },
  {
    id: 4,
    imgSrc: 'https://via.placeholder.com/50',
    title: 'Category 4',
  },
];

const Categories = () => {
  return (
    <div className="w-1/4 bg-white p-4 hidden lg:block">
      <ul className="space-y-4">
        {categories.map(category => (
          <li key={category.id} className="flex items-center space-x-4">
            <img 
              src={category.imgSrc} 
              alt={category.title} 
              className="w-12 h-12 object-cover rounded-full"
            />
            <span className="text-lg font-medium">{category.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
