import React from'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Home from '../views/Home';
import Login from '../views/Login';
import Purchases from '../views/Purchases';
import ProductDetail from '../views/ProductDetail';
import NotFound from '../views/NotFound';
import ProtectedRoute from '../components/common/ProtectedRoute';
import { loaderHome } from './loaders/loaderHome';

export const router = createBrowserRouter([
  {
    // Layout Route
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: loaderHome,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/purchases',
        element: (
          <ProtectedRoute>
            <Purchases />
          </ProtectedRoute>
        ),
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);