'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { registerUser } from '@/api/auth';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(formData);
        if(!user) {
            setError('username already taken')
            return null;
        }

        localStorage.setItem('userId',user.id);
        router.push("/login")
        return null;
    } catch (error) {
    
      setError('error when register try again.');
    }
  
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
