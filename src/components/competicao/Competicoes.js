import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import buscarCompeticoes from "../../actions/competicao/buscarCompeticoes";
import excluirCompeticao from "../../actions/competicao/excluirCompeticao";
import selecionarCompeticao from "../../actions/competicao/selecionarCompeticao";

// core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.jsx";
import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";

class Competicoes extends React.Component {
  componentDidMount() {
    this.props.buscarCompeticoes();
  }

  exibirCompeticoes() {
    const { classes, competicoes } = this.props;
    if (competicoes != null) {
      return competicoes.map(competicao => {
        return (
          <TableRow key={competicao.id}>
            <TableCell>
              {competicao.nome} - {competicao.temporada}
            </TableCell>
            <TableCell>{competicao.categoria.descricao}</TableCell>
            <TableCell>{competicao.tipoCompeticao}</TableCell>
            <TableCell>
              <div>
                <Link
                  to={"/competicao"}
                  {...this.props}
                  onClick={() => this.props.selecionarCompeticao(competicao)}
                >
                  <Fab
                    aria-label="Alterar"
                    size={"small"}
                    className={classes.fab}
                  >
                    <Icon>edit_icon</Icon>
                  </Fab>
                </Link>
                <Fab
                  style={{ marginLeft: "9px" }}
                  color="secondary"
                  size={"small"}
                  aria-label="Excluir"
                  className={classes.fab}
                >
                  <DeleteIcon
                    onClick={() => this.props.excluirCompeticao(competicao)}
                  />
                </Fab>
              </div>
            </TableCell>
          </TableRow>
        );
      });
    }
  }

  render() {
    const { classes, competicoes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Competicoes</h4>
              <p className={classes.cardCategoryWhite}>
                Listagem de competicoes cadastradas na liga.
              </p>
            </CardHeader>
            <CardBody>
              <div className={classes.tableResponsive}>
                <Table className={classes.table}>
                  <TableHead className={classes["primary" + "TableHeader"]}>
                    <TableRow>
                      <TableCell
                        className={
                          classes.tableCell + " " + classes.tableHeadCell
                        }
                      >
                        Descrição
                      </TableCell>
                      <TableCell>Categoria</TableCell>
                      <TableCell>Tipo Competição</TableCell>
                      <TableCell>Ações</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>{this.exibirCompeticoes()}</TableBody>
                  <div style={{ marginTop: "8px" }}>
                    <Link to={"/competicao"}>
                      <Fab
                        color="primary"
                        aria-label="Add"
                        className={classes.fab}
                      >
                        <AddIcon />
                      </Fab>
                    </Link>
                  </div>
                </Table>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

Competicoes.propTypes = {
  classes: PropTypes.object.isRequired
};
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const competicoesWithStyle = withStyles(styles)(Competicoes);

export function mapStateToProps(state) {
  return {
    competicoes: state.competicoes
  };
}

export default connect(
  mapStateToProps,
  { buscarCompeticoes, excluirCompeticao, selecionarCompeticao }
)(competicoesWithStyle);
