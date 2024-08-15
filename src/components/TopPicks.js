import React from 'react';
import ProductCard from './ProductCard';

const TopPicks = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4">Top Picks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <ProductCard title="Top Pick 1" />
        <ProductCard title="Top Pick 2" />
        <ProductCard title="Top Pick 3" />
        <ProductCard title="Top Pick 4" />
      </div>
    </div>
  );
};

export default TopPicks;
