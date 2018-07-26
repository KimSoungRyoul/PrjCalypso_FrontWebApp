import Dashboard from "../views/Dashboard";
import UserProfile from "../views/UserProfile";
import TableList from "../views/TableList";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "자원봉사 통계",
        icon: "pe-7s-graph",
        component: Dashboard
    },
    {
        path: "/mypage",
        name: "회원 프로필",
        icon: "pe-7s-user",
        component: UserProfile
    },
    {
        path: "/table",
        name: "직원별 봉사기록 ",
        icon: "pe-7s-note2",
        component: TableList
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
