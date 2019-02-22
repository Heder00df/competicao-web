import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Input from "@material-ui/core/Input";
import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import salvarEquipe from "../../actions/equipe/salvarEquipe";
import buscarEquipes from "../../actions/equipe/buscarEquipes";
import limparEquipeSelecionada from "../../actions/equipe/limparEquipe";
import { getAuthentication } from "../../security/securityContext";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class EquipeFormulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descricao: "",
      codigo: null,
      dataInclusao: null,
      email: "",
      mensagem: null
    };

    this.handleDescricaoEquipe = this.handleDescricaoEquipe.bind(this);
    this.handleEmailDiretor = this.handleEmailDiretor.bind(this);
    this.salvarEquipe = this.salvarEquipe.bind(this);
  }

  componentDidMount() {
    if (this.props.equipe !== null && this.props.equipe !== undefined) {
      this.setState({
        codigo: this.props.equipe.id,
        descricao: this.props.equipe.descricao
      });
    }
  }

  handleDescricaoEquipe(event) {
    this.setState({ descricao: event.target.value, mensagem: null });
  }

  handleEmailDiretor(event) {
    this.setState({ email: event.target.value });
  }

  salvarEquipe(event) {
    event.preventDefault();
    const token = this.getAuthentication();
    const equipe = {
      descricao: this.state.descricao,
      id: this.state.codigo,
      email: this.state.email
    };
    console.log(equipe);

    /* this.props.salvarEquipe(equipe).then(resp => {
      if (resp != null && resp.payload.status === 200) {
        this.setState({
          mensagem: `Equipe ${this.state.descricao} salva com sucesso.`
        });
        this.setState({ codigo: null, descricao: "" });
      } else if (resp != null && resp.payload.status !== 200) {
        this.setState({
          mensagem: `Erro ao salvar equipe ${this.state.descricao}.`
        });
      }
    }); */
  }

  exibirMensagem() {
    if (this.state.mensagem != null) {
      return <h4>{this.state.mensagem}</h4>;
    }
    return "";
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.salvarEquipe}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>
                    Cadastro de Equipes
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                    Informe o nome da equipe
                  </p>
                </CardHeader>
                <CardBody>
                  {this.exibirMensagem()}
                  <Divider style={{ marginTop: "34px" }} />
                  <Input
                    style={{ marginTop: "4px" }}
                    onChange={this.handleDescricaoEquipe}
                    value={this.state.descricao}
                    placeholder="Digite o nome da equipe"
                    className={classes.input}
                    fullWidth={true}
                    inputProps={{
                      "aria-label": "Description"
                    }}
                  />
                  <Divider style={{ marginTop: "34px" }} />
                  <Input
                    style={{ marginTop: "4px" }}
                    onChange={this.handleEmailDiretor}
                    value={this.state.email}
                    placeholder="Digite o email diretor da equipe"
                    className={classes.input}
                    fullWidth={true}
                    inputProps={{
                      "aria-label": "Description"
                    }}
                  />
                  <div
                    className="right col-lg-2"
                    style={{ left: "0", marginTop: "22px" }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      type="submit"
                    >
                      Salvar
                    </Button>
                    <Link to={"/equipes"}>
                      <Button
                        variant="contained"
                        className={classes.button}
                        onClick={() => this.props.limparEquipeSelecionada()}
                        style={{ marginLeft: "9px" }}
                      >
                        Voltar
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </form>
      </div>
    );
  }
}

const equipeFormularioStyle = withStyles(styles)(EquipeFormulario);

export function mapStateToProps(state) {
  return {
    equipe: state.equipe
  };
}

export default connect(
  mapStateToProps,
  { salvarEquipe, buscarEquipes, limparEquipeSelecionada, getAuthentication }
)(equipeFormularioStyle);
