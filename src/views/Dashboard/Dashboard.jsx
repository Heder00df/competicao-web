import Icon from "@material-ui/core/Icon";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Accessibility from "@material-ui/icons/Accessibility";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Update from "@material-ui/icons/Update";
import Warning from "@material-ui/icons/Warning";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardIcon from "../../components/Card/CardIcon.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import Table from "../../components/Table/Table.jsx";
import Danger from "../../components/Typography/Danger.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  exibirCards() {
    if (this.props.usuarioAutenticado.isUserAuthenticated) {
      const { classes } = this.props;
      return (
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Equipes</p>
                <h3 className={classes.cardTitle}>
                  49/50 <small>GB</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <Link to={"/equipes"} {...this.props}>Gerenciar equipes...
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Atletas</p>
                <h3 className={classes.cardTitle}>$34,245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Gerenciar atletas
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Jogos</p>
                <h3 className={classes.cardTitle}>75</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Ver todos os jogos
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Followers</p>
                <h3 className={classes.cardTitle}>+245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      );
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.exibirCards()}
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="success">
                <h4 className={classes.cardTitleWhite}>Classificação</h4>
                <p className={classes.cardCategoryWhite}>
                  Classificação geral do campeonato
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={[
                    ["1", "Panelinha", "$36,738", "Niger"],
                    ["2", "Mafia", "$23,789", "Curaçao"],
                    ["3", "Estrela Vermelha", "$56,142", "Netherlands"],
                    ["4", "Aguia Dourada", "$38,735", "Korea, South"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Artilheiros</h4>
                <p className={classes.cardCategoryWhite}>Copa dos campeões</p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={[
                    ["1", "Heder Machado", "$36,738", "Niger"],
                    ["2", "Erick", "$23,789", "Curaçao"],
                    ["3", "Danilo", "$56,142", "Netherlands"],
                    ["4", "Mateus", "$38,735", "Korea, South"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const dashbordWithStyle = withStyles(dashboardStyle)(Dashboard);

export function mapStateToProps(state) {
  return {
    usuarioAutenticado: state.usuarioAutenticado
  };
}

export default connect(mapStateToProps)(dashbordWithStyle);
