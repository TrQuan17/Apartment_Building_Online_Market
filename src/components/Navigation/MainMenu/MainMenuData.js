import Iconify from 'components/Iconify'

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />

export const mainMenuItems = [
	{
		title: 'Áo quần',
		icon: 'ion:shirt-outline',
		link: '/shop?category=63987eaa18d34880637201b9',
	},
	{
		title: 'Điện thoại',
		icon: 'bi:phone',
		link: '/shop?category=63987e8118d34880637201b3',
	},

	{
		title: 'Laptop',
		icon: 'ant-design:laptop-outlined',
		link: '/shop?category=63984ebf53df4ab7390849b9',
	},
	{
		title: 'Tablet',
		icon: 'clarity:tablet-line',
		link: '/shop?category=63987e6e18d34880637201af',
	},
	{
		title: 'Đồng hồ thông minh',
		icon: 'ion:watch-outline',
		link: '/shop?category=63987e5b18d34880637201ab',
	},
	{
		title: 'Đồng hồ thời trang',
		icon: 'ph:watch-light',
		link: '/watch',
	},
]

export const AdminSidebarItems = [
	{
		title: 'Thống kê',
		path: '/admin/dashboard',
		icon: getIcon('bxs:dashboard'),
	},
	{
		title: 'Người dùng',
		path: '/admin/user',
		icon: getIcon('carbon:user-avatar-filled'),
	},
	{
		title: 'Sản phẩm',
		path: '/admin/product',
		icon: getIcon('bxs:shopping-bag'),
	},
	{
		title: 'Danh mục',
		path: '/admin/category',
		icon: getIcon('ic:round-category'),
	},
	{
		title: 'Thương hiệu',
		path: '/admin/sub',
		icon: getIcon('ic:round-branding-watermark'),
	},
	{
		title: 'Khuyến mãi',
		path: '/admin/coupon',
		icon: getIcon('ic:round-discount'),
	},
	{
		title: 'Đơn hàng',
		path: '/admin/order',
		icon: getIcon('fa:first-order'),
	},
]

export const UserSidebarItems = [
	{
		title: 'Thông tin tài khoản',
		path: '/user/profile',
		icon: getIcon('carbon:user-avatar-filled'),
	},
	{
		title: 'Đơn hàng của tôi',
		path: '/user/orders',
		icon: getIcon('fa:first-order'),
	},
	{
		title: 'Yêu thích',
		path: '/user/liked',
		icon: getIcon('bxs:dashboard'),
	},
]
