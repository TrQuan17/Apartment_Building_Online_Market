// Layout

// Page
import Product from '../pages/Product'
import Order from '../pages/Order'
import Profile from '../pages/Profile'

const publicRoutes = [
]

const privateRoutes = [
    { path: '/', component: Product},
    { path: '/order', component: Order},
    { path: '/profile', component: Profile}
]

export { publicRoutes, privateRoutes }