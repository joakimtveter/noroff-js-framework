import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

// Import Pages for React Router
import Homepage from '@/pages/homePage';
import ProductPage from '@/pages/productPage';
// import ContactPage from '@/pages/contactPage';
// import CartPage from '@/pages/cartPage';
// import SuccessPage from '@/pages/successPage';
import ErrorPage from '@/pages/errorPage';

// Import Global Styles
import './global.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'product/:productId',
        element: <ProductPage />,
    },
    // {
    //     path: 'contact',
    //     element: <ContactPage />,
    // },
    // {
    //     path: 'cart',
    //     element: <CartPage />,
    // },
    // {
    //     path: 'checkout-success',
    //     element: <SuccessPage />,
    // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <HelmetProvider>
                <RouterProvider router={router} />
            </HelmetProvider>
        </Provider>
    </React.StrictMode>
);
