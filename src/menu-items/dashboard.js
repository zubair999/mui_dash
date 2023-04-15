// assets
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutIcon from '@mui/icons-material/Logout';

// icons
const icons = {
    DashboardIcon,
    AccountCircleIcon,
    HomeMaxIcon,
    RemoveShoppingCartIcon,
    CategoryIcon,
    ReviewsIcon,
    LogoutIcon,
    

};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardIcon,
            breadcrumbs: false
        },
        {
            id: 'user',
            title: 'User',
            type: 'item',
            url: 'User',
            icon: icons.AccountCircleIcon,
            breadcrumbs: false
        },
        {
            id: 'product',
            title: 'Product',
            type: 'item',
            url: '/product',
            icon: icons.HomeMaxIcon
        },
        // {
        //     id: 'productdetails',
        //     title: 'Product Details ',
        //     type: 'item',
        //     url: '/productdetails',
        //     icon: icons.BgColorsOutlined
        // },
        // {
        //     id: 'productlist',
        //     title: 'Product List',
        //     type: 'item',
        //     url: '/productlist',
        //     icon: icons.BarcodeOutlined
        // },
        // {
        //     id: 'addnewproduct',
        //     title: 'Add New Product',
        //     type: 'item',
        //     url: '/addnew',
        //     icon: icons.AntDesignOutlined,
        //     breadcrumbs: false
        // },
        {
            id: 'checkout',
            title: 'Checkout',
            type: 'item',
            url: '/checkout',
            icon: icons.RemoveShoppingCartIcon,
            breadcrumbs: false
        },
        {
            id: 'categories',
            title: 'Categories',
            type: 'item',
            url: '/categories',
            icon: icons.CategoryIcon,
            breadcrumbs: false
        },
        {
            id: 'reviews',
            title: 'Reviews',
            type: 'item',
            url: '/reviews',
            icon: icons.ReviewsIcon,
            breadcrumbs: false
        },
        {
            id: 'logout',
            title: 'Logout',
            type: 'item',
            url: '/logout',
            icon: icons.LogoutIcon,
            breadcrumbs: false
        }

    ]
};

export default dashboard;
