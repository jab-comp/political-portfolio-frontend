import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
import AdminLogin from './pages/admin/AdminLogin';
import HomePage from './pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/dashboard/*" element={<AdminRoutes />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
