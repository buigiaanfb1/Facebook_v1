import Home from '../Templates/Client/Home';
import Profile from '../Templates/Client/Profile';

export const homeRoutes = [
  {
    exact: true,
    path: '/profile/:id',
    component: Profile,
  },
  {
    exact: true,
    path: '/',
    component: Home,
  },
];
