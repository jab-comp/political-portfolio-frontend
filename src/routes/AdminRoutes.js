// ./routes/AdminRoutes.js
import React from 'react';
import { Route } from 'react-router-dom';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/AdminDashBoard';

const AdminRoutes = () => (
  <>
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    {/* Add more admin-related routes here */}
  </>
);

export default AdminRoutes;
