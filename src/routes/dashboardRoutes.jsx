import Dashboard from "../views/Dashboard";
import UserProfile from "../views/UserProfile";
import TableList from "../views/TableList";
import Home from "../views/Home";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "pe-7s-graph",
        component: Dashboard
    },
    {
        path: "/user",
        name: "User Profile",
        icon: "pe-7s-user",
        component: UserProfile
    },
    {
        path: "/table",
        name: "Table List",
        icon: "pe-7s-note2",
        component: TableList
    },
    {
        path: "/",
        name: "Main",
        icon: "pe-7s-note2",
        component: Home
    }

    /*,
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography
  },
  { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade
  }*/,
    {redirect: true, path: "/", to: "/dashboard", name: "Dashboard"}
];

export default dashboardRoutes;
