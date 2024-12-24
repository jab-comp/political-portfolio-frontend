import React, { useState } from 'react';
import { login } from '../../apis';
import { setAccessToken } from '../../utils';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('')
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (usernameError) {
      setUsernameError(true)
      return
    }

    if (passwordError) {
      setPasswordError(true)
      return
    }

    try {
      const response = await login({ username, password })
      if(response.token){
        setAccessToken(response.token)
        navigate('/dashboard')
      }
    } catch (error) {
      setError('Invalid credentials')
      console.log(">>", error)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome to Admin Portal</h1>
        <p className="text-center text-gray-600 mb-6">Please login to manage the dashboard.</p>
        <p className="text-center text-red-400 mb-6">{error}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
                setUsernameError(false)
              }}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setPasswordError(false)
              }}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
