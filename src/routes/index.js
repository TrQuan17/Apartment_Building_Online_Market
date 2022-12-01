import config from 'src/config';

// Page
import Product from '../pages/Product';
import Order from '../pages/Order';
import Profile from '../pages/Profile';

const publicRoutes = [
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