import React from 'react';

const RegisterForm = ({ formData, handleChange, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="border rounded w-full py-2 px-3"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border rounded w-full py-2 px-3"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
