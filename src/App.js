// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes'; // Import the AppRoutes component

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
