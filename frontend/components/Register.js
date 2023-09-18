'use client'
import React, { useState } from 'react';
import Link from 'next/link';
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., make an API request for user registration)
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center text-black">
    <div className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <LoginForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} error={error}/>
      </div>       
  </div>
  );
};

export default Register;
