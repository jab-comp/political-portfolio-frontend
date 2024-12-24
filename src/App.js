// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminRoutes from './routes/AdminRoutes'; // Import the admin routes

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Main Home Page */}
        {AdminRoutes()} {/* This will render admin-related routes */}
      </Routes>
    </Router>
  );
};

export default App;
