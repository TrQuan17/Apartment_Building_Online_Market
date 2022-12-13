import config from 'src/config';
import { LoginRegisterLayout } from "src/components/Layout";
// Page
import Login from '../pages/Login';
import { ShowProduct } from '../pages/Product';
import { AddProduct, UpdateProduct } from '../pages/Product';
import { ShowOrder, Turnover } from '../pages/Order';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

const publicRoutes = [
    
]

const privateRoutes = [
    { path: config.routes.showProduct, component: ShowProduct},
    { path: config.routes.addProduct, component: AddProduct},
    { path: config.routes.updateProduct, component: UpdateProduct},
    { path: config.routes.showOrder, component: ShowOrder},
    { path: config.routes.turnover, component: Turnover},
    { path: config.routes.profile, component: Profile},
    {path: config.routes.login, component: Login, layout: LoginRegisterLayout},
    {path: config.routes.register, component: Register, layout: LoginRegisterLayout}
]

export { publicRoutes, privateRoutes }