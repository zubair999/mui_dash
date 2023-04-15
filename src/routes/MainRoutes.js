import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
// import FileManager from 'pages/managenment/filemanager';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const User = Loadable(lazy(() => import('pages/dashboard/user')));
const Categories = Loadable(lazy(() => import('pages/dashboard/categories')));
const Reviews = Loadable(lazy(() => import('pages/dashboard/reviews')));

// render - ecommerce
const Product = Loadable(lazy(() => import('pages/ecommerce/product')));
const ProductList = Loadable(lazy(() => import('pages/ecommerce/productlist')));
const ProductDetails = Loadable(lazy(() => import('pages/ecommerce/productdetails')));
const AddNewProduct = Loadable(lazy(() => import('pages/ecommerce/addnewproduct')));
const Checkout = Loadable(lazy(() => import('pages/ecommerce/checkout')));

// render - logout
const Logout = Loadable(lazy(() => import('pages/logout/logout')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'user',
            element: <User />
        },
        {
            path: 'categories',
            element: <Categories />
        },
        {
            path: 'reviews',
            element: <Reviews/>
        },
        {
            path: 'product',
            element: <Product />
        },
        {
            path: 'productlist',
            element: <ProductList />
        },
        {
            path: 'productdetails',
            element: < ProductDetails />
        },
        {
            path: 'addnew',
            element: < AddNewProduct />
        },
        {
            path: 'checkout',
            element: < Checkout />
        },
        {
            path: 'logout',
            element: < Logout/>
        }

    ]
};

export default MainRoutes;
