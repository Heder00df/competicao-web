import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Login from "../components/Auth/Login";
import { setBrowserHistory } from "../util/applicationContext";
import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import TableList from "../views/TableList/TableList.jsx";
import Equipes from "../components/equipe/Equipes";
import EquipeFormulario from "../components/equipe/EquipeFormulario";
import Competicoes from "../components/competicao/Competicoes";
import CompeticaoFormulario from "../components/competicao/CompeticaoFormulario";

export class AppRoutes extends React.Component {
  constructor(props) {
    super(props);
    setBrowserHistory(this.props.history);
  }

  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/table" component={TableList} />
        <Route path="/user" component={UserProfile} />

        <AuthenticatedRoute path="/equipes" component={Equipes} />
        <AuthenticatedRoute path="/equipe" component={EquipeFormulario} />
        <AuthenticatedRoute path="/competicoes" component={Competicoes} />
        <AuthenticatedRoute path="/competicao" component={CompeticaoFormulario} />
      </Switch>
    );
  }
}

export default withRouter(AppRoutes);
