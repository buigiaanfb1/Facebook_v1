import Friends from '../Templates/Client/Friends';
import Home from '../Templates/Client/Home';
import Messenger from '../Templates/Client/Messenger';
import Profile from '../Templates/Client/Profile';
import MessengerResponsive from '../Templates/Client/MessengerResponsive';

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
  {
    exact: true,
    path: '/friends',
    component: Friends,
  },
  { exact: true, path: '/messages/t/:id', component: MessengerResponsive },
];
