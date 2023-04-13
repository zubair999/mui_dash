import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
// import FileManager from 'pages/managenment/filemanager';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// render - managenment
const User = Loadable(lazy(() => import('pages/managenment/user')));
const FileManager = Loadable(lazy(() => import('pages/managenment/filemanager')));

// render -formandtable
const FormsValidation = Loadable(lazy(() => import('pages/formstables/formvalidation')));
const Pricing = Loadable(lazy(() => import('pages/formstables/pricing')));

// render - ecommerce
const Product = Loadable(lazy(() => import('pages/ecommerce/product')));
const ProductList = Loadable(lazy(() => import('pages/ecommerce/productlist')));
const ProductDetails = Loadable(lazy(() => import('pages/ecommerce/productdetails')));
const AddNewProduct = Loadable(lazy(() => import('pages/ecommerce/addnewproduct')));
const Checkout = Loadable(lazy(() => import('pages/ecommerce/checkout')));
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
            path: 'color',
            element: <Color />
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
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        },
        {
            path: 'user',
            element: <User />
        },
        {
            path: 'form',
            element: <FormsValidation />
        },
        {
            path: 'pricing',
            element: <Pricing />
        },
        {
            path: 'filemanager',
            element: <FileManager />
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
        }

    ]
};

export default MainRoutes;
