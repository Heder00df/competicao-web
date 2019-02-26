import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import buscarEquipes from "../../actions/equipe/buscarEquipes";
import excluirEquipe from "../../actions/equipe/excluirEquipe";
import selecionarEquipe from "../../actions/equipe/selecionarEquipe";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import { hasPerfil } from "../../security/securityContext";

class Equipes extends React.Component {
  componentDidMount() {
    this.props.buscarEquipes();
  }

  exibirEquipes() {
    const { classes, equipes } = this.props;
    if (equipes != null) {
      return equipes.map(equipe => {
        return (
          <TableRow key={equipe.id}>
            <TableCell>{equipe.descricao}</TableCell>
            <TableCell>
              <div>
                <Link
                  to={"/equipe"}
                  {...this.props}
                  onClick={() => this.props.selecionarEquipe(equipe)}
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
                    onClick={() => this.props.excluirEquipe(equipe)}
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
    const { classes, equipes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Equipes</h4>
              <p className={classes.cardCategoryWhite}>
                Listagem de equipes cadastradas na liga.
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
                      <TableCell>Ações</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>{this.exibirEquipes()}</TableBody>
                  <div style={{ marginTop: "8px" }}>
                    <Link to={"/equipe"}>
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

Equipes.propTypes = {
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

const equipeWithStyle = withStyles(styles)(Equipes);

export function mapStateToProps(state) {
  return {
    equipes: state.equipes
  };
}

export default connect(
  mapStateToProps,
  { buscarEquipes, excluirEquipe, selecionarEquipe, hasPerfil }
)(equipeWithStyle);
