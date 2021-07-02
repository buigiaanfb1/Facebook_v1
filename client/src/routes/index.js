import Home from "../Templates/Client/Home";
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
];
