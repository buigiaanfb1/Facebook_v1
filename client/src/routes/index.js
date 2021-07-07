import Home from "../Templates/Client/Home";
import Messenger from "../Templates/Client/Messenger";
import Profile from "../Templates/Client/Profile/index";

export const homeRoutes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/profile",
    component: Profile,
  },
  {
    exact: true,
    path: "/messenger",
    component: Messenger,
  },
];
