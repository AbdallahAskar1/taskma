'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import Link from 'next/link';
import {loginUser} from "@/api/auth"
import LoginForm from './LoginForm';
const Login = () => {
    const router = useRouter()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    
  });
  const [error, setError] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await loginUser(formData);
        if(!token) {
            setError('Invalid username or password')
            return null;
        }

        localStorage.setItem('authToken',token);
        router.push("/home")
        return null;
    } catch (error) {
    
      setError('Invalid username or password.');
    }
  };
  

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center text-black">
      <div className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <LoginForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} error={error}/>
        </div>       
    </div>
  );

  };
export default Login;
