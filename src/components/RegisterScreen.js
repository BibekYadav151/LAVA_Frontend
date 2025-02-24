import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    try {
      // Reset error and success messages
      setPasswordError('');
      setErrorMessage('');
      setSuccessMessage('');

      // Prepare the data to be sent to the backend
      const data = {
        name: fullName,
        email,
        password,
      };

      // Make the API request to register the user
      const response = await axios.post('http://127.0.0.1:5000/api/users/', data);

      // Handle success
      setSuccessMessage('Registration successful!');
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      // Handle error
      setErrorMessage(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-gray-200 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">Create a new account</h2>
        <p className="text-gray-600 text-center mb-6">Enter your details to register.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              id="fullName"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="James Brown"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
            <input
              type="email"
              id="email"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="hello@alignui.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
            <input
              type="password"
              id="password"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold mb-2">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Register
          </button>
          {successMessage && <p className="text-green-500 text-xs text-center mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 text-xs text-center mt-4">{errorMessage}</p>}
          <p className="text-gray-600 text-xs text-center mt-4">
            By clicking Register, you agree to accept Apex Financial's{' '}
            <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
