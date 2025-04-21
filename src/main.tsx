import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import {
    createHashRouter,
    RouterProvider
} from 'react-router-dom';
import Home from './components/Home';

import './App.css';

const router = createHashRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/home',
        element: <Home />
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
