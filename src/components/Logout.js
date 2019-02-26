import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { logoutUser } from "../../actions/authenticationJwtActions";
import { removeOrgaoSelecionado } from "../../util/orgaoSelecionado";
import limparAlertas from "../../actions/alertas/limparAlertas";

export class Logout extends Component {
  componentWillMount() {
    this.props.logoutUser();
    removeOrgaoSelecionado();
    this.props.limparAlertas();
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default connect(
  null,
  { logoutUser, limparAlertas }
)(Logout);
