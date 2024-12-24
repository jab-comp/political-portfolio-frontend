import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import Routes
import AdminDashboard from '../pages/admin/AdminDashBoard';
import Add from '../pages/admin/title/Add';
import Edit from '../pages/admin/title/Edit';
import AddContent from '../pages/admin/content/Add';
import EditContent from '../pages/admin/content/Edit';
import { getAccessToken } from '../utils';

const AdminRoutes = () => {
  const token = getAccessToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <Routes>
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/dashboard/titles/add" element={<Add />} />
      <Route path="/dashboard/titles/:id" element={<Edit />} />
      <Route path="/dashboard/contents/add" element={<AddContent />} />
      <Route path="/dashboard/contents/:id" element={<EditContent />} />
    </Routes>
  );
};

export default AdminRoutes;
