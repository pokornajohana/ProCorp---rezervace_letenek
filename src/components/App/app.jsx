import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Flight } from '../Flight/flight';

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Flight />,
  },
]);
