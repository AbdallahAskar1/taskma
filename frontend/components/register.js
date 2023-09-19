'use client'
import React, { useState } from 'react';
import { registerUser } from '@/api/auth';
import { useRouter } from 'next/navigation';
import LoginForm from './LoginForm';
import RegisterForm from './registerForm';
const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error,setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData)=>({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
      const body = {
        username:formData.username,
        password:formData.password
      }
      const res = await registerUser(body);

      if(!res.user) {
            setError('username already taken')
            return ;
        }

        localStorage.setItem('userId',res.user.id);
        router.push("/login")
        return null;
  
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center text-black">
    <div className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <RegisterForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} error={error}/>
      </div>       
  </div>
  );
};

export default Register;
