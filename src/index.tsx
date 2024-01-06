import {createRoot} from 'react-dom/client';
import App from './components/App'
import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from '@/pages/about';
import { Shop } from '@/pages/shop';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/about',
            element: <Suspense fallback={<span>Loading...</span>}><About/></Suspense>,
        },
        {
            path: '/shop',
            element: <Suspense fallback={<span>Loading...</span>}><Shop/></Suspense>,
        },
      ]
    },
]);

container.render(<RouterProvider router={router} />)