import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { authRoutes } from '../modules/auth/auth.route';
import { BookRoutes } from '../modules/Book/book.routes';
import { adminRoutes } from '../modules/admin/admin.routes';
import { OrderRoutes } from '../modules/Order/order.routes';
import { cartRoutes } from '../modules/cart/cart.route';
import { CategoryRoutes } from '../modules/category/category.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/admin',
    route: adminRoutes,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
  {
    path: '/book',
    route: BookRoutes,
  },
  {
    path: '/order',
    route: OrderRoutes,
  },
  {
    path: '/cart',
    route: cartRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
