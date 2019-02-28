import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { connect } from "react-redux";
import Atleta from "./Atleta";
import {
  cadastrar,
  consultar,
  pesquisarAtletaPorCpf
} from "../../actions/atleta/dadosAtletaAction";

class CadastroDadosAtleta extends Component {
  componentDidMount() {
    this.props.consultar();
  }

  onSubmit = async values => {
    this.props.cadastrar(values);
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.props.consultar();
  };

  buscuarPorCpf = cpf => {
    console.log(cpf.target.value);

  }

  render() {
    return (
      <Card className="mb-4">
        <CardContent>
          <Atleta
            onSubmit={this.onSubmit}
            dados={this.props.dados}
            buscarPorCpf={this.buscuarPorCpf}
          />
        </CardContent>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return { dados: state.dados };
}

const actions = { consultar, cadastrar, pesquisarAtletaPorCpf };
export default connect(
  mapStateToProps,
  actions
)(CadastroDadosAtleta);
