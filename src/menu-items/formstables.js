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

const formstables = {
    id: 'formstables',
    title: 'Forms Tables',
    type: 'group',
    children: [
        {
            id: 'forms-validation',
            title: 'Forms Validation',
            type: 'item',
            url: '/form',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'forms-pricing',
            title: 'Pricing',
            type: 'item',
            url: '/pricing',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        }
    ]
};

export default formstables;
