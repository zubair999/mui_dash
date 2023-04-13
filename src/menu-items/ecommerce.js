// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};
// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const ecommerce = {
    id: 'ecommerce',
    title: 'E-commerce',
    type: 'group',
    children: [
        {
            id: 'e-product',
            title: 'Product',
            type: 'item',
            url: '/product',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'e-productdetails',
            title: 'Product Details ',
            type: 'item',
            url: '/productdetails',
            icon: icons.BgColorsOutlined
        },
        {
            id: 'e-productlist',
            title: 'Product List',
            type: 'item',
            url: '/productlist',
            icon: icons.BarcodeOutlined
        },
        {
            id: 'e-addnewproduct',
            title: 'Add New Product',
            type: 'item',
            url: '/addnew',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        },
        {
            id: 'e-checkout',
            title: 'Checkout',
            type: 'item',
            url: '/checkout',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        }
    ]
};

export default ecommerce;
