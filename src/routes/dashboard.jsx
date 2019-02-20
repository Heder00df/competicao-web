// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Assignment from "@material-ui/icons/Assignment";
import Atletas from "@material-ui/icons/TransferWithinAStation";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import Equipes from "../components/equipe/Equipes"
import EquipeFormulario from "../components/equipe/EquipeFormulario";
import Login from "../components/Auth/Login"


const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/equipe",
    sidebarName: "",
    navbarName: "",
    icon: Assignment,
    component: EquipeFormulario
  },
  {
    path: "/equipes",
    sidebarName: "Equipes",
    navbarName: "Equipes",
    icon: Assignment,
    component: Equipes
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/table",
    sidebarName: "Atletas",
    navbarName: "Atletas",
    icon: Atletas,
    component: TableList
  },
  {
    path: "/login",
    sidebarName: "Acessar",
    navbarName: "Acessar",
    icon: Atletas,
    component: Login
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/login",
    sidebarName: "Acessar",
    navbarName: "",
    icon: LocationOn,
    component: Login
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
