import React from 'react';
import Carousel from '../components/Carousel ';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import CategoriesList from '../components/CategoriesList';
import TopPicks from '../components/TopPicks';
import ProductList from '../components/ProductList';

const HomePage = () => {const sampleProduct = {
  title: 'Sample Product',
  image: 'https://via.placeholder.com/400',
  description: 'This is a detailed description of the product.',
  price: '29.99',
  numberSold: 123
};

// In your component or page:

  return (
    <div className="bg-gray-100">
      {/* Carousel Section */}
      <div className="flex">
        <Categories />
        <Carousel />
      </div>

      {/* Hero Section */}
      <section className="my-8">
        <FeaturedProducts />
      </section>
      <section className="my-8">
        <ProductList />
      </section>

      {/* Category with Product Cards */}
      
      <section className="my-8">
        <CategoriesList />
      </section>
      {/* Top Picks */}
      <section className="my-8 bg-white py-8">
        <TopPicks />
      </section>
    </div>
  );
};

export default HomePage;
