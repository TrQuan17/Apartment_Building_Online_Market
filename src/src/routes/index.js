// layout
import config from '~/config';
// import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Product from '~/pages/Product';
// import Search from '~/pages/Search';
import Order from '~/pages/Order';
import History from '~/pages/History';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
// publicRoutes
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.showProduct,
    component: Following,
  },
  {
    path: config.route.login,
    component: Login,
  },
  {
    path: config.route.register,
    component: Register,
  },
];
const privateRoutes = [
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.product,
    component: Product,
  },
  {
    path: config.routes.curorder,
    component: Order,
  },
  {
    path: config.routes.history,
    component: History,
  },
];

export { publicRoutes, privateRoutes };
