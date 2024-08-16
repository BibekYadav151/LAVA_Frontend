import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './components/ProductDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleCategory from './pages/SingleCategoryPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckOut';
import ProfilePage from './pages/ProfilePage';
import LoginForm from './components/LoginScreen';
import RegisterForm from './components/RegisterScreen';

const AppContent = () => {
  const location = useLocation();

  // Check if the current path is login or register
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/productId" element={<ProductDetailsPage />} />
          <Route path="/category/categoryName" element={<SingleCategory />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
