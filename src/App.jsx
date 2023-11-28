/* eslint-disable react-hooks/rules-of-hooks */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GlobalSotage } from '../context/GlobalContext';

import HomePage from './pages/HomePage';
import ProductDog from './pages/ProductDog';

import './App.css';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/pet/dog/racao',
      element: <ProductDog />,
    },
  ]);

  return (
    <GlobalSotage>
      <RouterProvider router={router} />
    </GlobalSotage>
  );
};

export default App;
