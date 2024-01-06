import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from '@/pages/about';
import { Shop } from '@/pages/shop';
var root = document.getElementById('root');
if (!root) {
    throw new Error('root not found');
}
var container = createRoot(root);
var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            {
                path: '/about',
                element: _jsx(Suspense, { fallback: _jsx("span", { children: "Loading..." }), children: _jsx(About, {}) }),
            },
            {
                path: '/shop',
                element: _jsx(Suspense, { fallback: _jsx("span", { children: "Loading..." }), children: _jsx(Shop, {}) }),
            },
        ]
    },
]);
container.render(_jsx(RouterProvider, { router: router }));
