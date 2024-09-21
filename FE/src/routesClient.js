import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientRoutes from './routes/ClientRoutes';

const RoutesClient = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<ClientRoutes />} /> 
    </Routes>
  </Router>
);

export default RoutesClient;
