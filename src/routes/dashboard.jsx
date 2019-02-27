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
import Login from "../components/Auth/Login";
import CadastroAtleta from "../components/Atleta/CadastroDadosAtleta";


const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    isAutenticate: false,
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/equipe",
    sidebarName: "",
    navbarName: "",
    isAutenticate: true,
    icon: Assignment,
    component: EquipeFormulario
  },
  {
    path: "/equipes",
    sidebarName: "Equipes",
    navbarName: "Equipes",
    isAutenticate: true,
    icon: Assignment,
    component: Equipes
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    isAutenticate: true,
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    isAutenticate: false,
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/atleta",
    sidebarName: "Atletas",
    navbarName: "Atletas",
    isAutenticate: false,
    icon: Atletas,
    component: CadastroAtleta
  },
  {
    path: "/atleta",
    sidebarName: "",
    navbarName: "",
    isAutenticate: false,
    icon: Atletas,
    component: CadastroAtleta
  },
  {
    path: "/login",
    sidebarName: "Acessar",
    navbarName: "Acessar",
    isAutenticate: false,
    icon: Atletas,
    component: Login
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    isAutenticate: false,
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    isAutenticate: false,
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/login",
    sidebarName: "Acessar",
    navbarName: "",
    isAutenticate: false,
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
