'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { registerUser } from '@/api/auth';

import LoginForm from './LoginForm';
const Register = () => {
  const [formData, setFormData] = useState({
    username: 'abdallah',
    password: '123456',
    confirmPassword: '',
  });
  const [error,setError] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
      const body = {
        username:formData.name,
        password:formData.password
      }
      const res = await registerUser(formData);
      console.log(res)
        // if(!res.user) {
        //     setError('username already taken')
        //     return null;
        // }

        localStorage.setItem('userId',user.id);
        router.push("/login")
        return null;
  
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center text-black">
    <div className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <LoginForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} error={error}/>
      </div>       
  </div>
  );
};

export default Register;
