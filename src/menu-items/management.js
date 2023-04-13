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

const management = {
    id: 'management',
    title: 'Management',
    type: 'group',
    children: [
        {
            id: 'manag-user',
            title: 'User',
            type: 'item',
            url: '/user',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'manag-filemanager',
            title: 'File Manager',
            type: 'item',
            url: '/filemanager',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        }
    ]
};

export default management;
