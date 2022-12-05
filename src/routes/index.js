import config from 'src/config';
import { LoginRegisterLayout } from "src/components/Layout";
// Page
import Login from '../pages/Login';
import Product from '../pages/Product';
import Order from '../pages/Order';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

const publicRoutes = [
    {path: config.routes.login, component: Login, layout: LoginRegisterLayout},
    {path: config.routes.register, component: Register, layout: LoginRegisterLayout}
]

const privateRoutes = [
    { path: config.routes.product, component: Product},
    { path: config.routes.addProduct, component: Product},
    { path: config.routes.editProduct, component: Product},
    { path: config.routes.order, component: Order},
    { path: config.routes.turnover, component: Order},
    { path: config.routes.profile, component: Profile}
]

export { publicRoutes, privateRoutes }