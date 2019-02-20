import React from "react";
import { connect } from "react-redux";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import autentcacarUsuario from "../../actions/auth/autenticacaoUsuario";
import { saveSecurityToken } from "../../security/securityContext";

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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      senha: "",
      mensagem: null
    };

    this.handleUsuario = this.handleUsuario.bind(this);
    this.handleSenha = this.handleSenha.bind(this);
    this.salvarEquipe = this.salvarEquipe.bind(this);
  }

  handleUsuario(event) {
    this.setState({ usuario: event.target.value, mensagem: null });
  }

  handleSenha(event) {
    this.setState({ senha: event.target.value, mensagem: null });
  }

  salvarEquipe(event) {
    event.preventDefault();
    const dadosAutenticacao = {
      email: this.state.usuario,
      senha: this.state.senha
    };
    this.props.autentcacarUsuario(dadosAutenticacao).then(resp => {
      if (resp != null && resp.payload.status === 200) {
        const authentication = {
          tokenJwt: resp.payload.headers.authorization.substr(7),
          username: this.state.usuario,
          isUserAuthenticated: true
        };
        saveSecurityToken(authentication);
      } else if (resp != null && resp.payload.status !== 200) {
        this.setState({
          mensagem: `Erro ao salvar equipe ${this.state.descricao}.`
        });
      }
    });
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
        <form onSubmit={this.salvarEquipe} className="text-justify">
          <GridContainer>
            <GridItem xs={8} sm={8} md={8}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Entrar no Sistema</h4>
                  <p className={classes.cardCategoryWhite}>
                    Gerenciador de Competições
                  </p>
                </CardHeader>
                <CardBody>
                  <Input
                    style={{ marginTop: "4px" }}
                    required
                    onChange={this.handleUsuario}
                    value={this.state.usuario}
                    placeholder="Digite usuario"
                    className={classes.input}
                    fullWidth={true}
                    inputProps={{
                      "aria-label": "Description"
                    }}
                  />
                  <Input
                    style={{ marginTop: "8px" }}
                    onChange={this.handleSenha}
                    value={this.state.senha}
                    placeholder="Digite a senha"
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
                      Entrar
                    </Button>
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

const equipeFormularioStyle = withStyles(styles)(Login);

export function mapStateToProps(state) {
  return {
    usuarioAutenticado: state.usuarioAutenticado
  };
}

export default connect(
  mapStateToProps,
  { autentcacarUsuario }
)(equipeFormularioStyle);
