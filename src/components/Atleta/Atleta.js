import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// core components
import GridItem from "components/Grid/GridItem.js";
import PropTypes from "prop-types";
import React from "react";
import { Field, Form } from "react-final-form";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  composeValidators,
  isCPF,
  required
} from "../../util/fieldLevelValidations";

import pesquisarAtletaPorCpf from "../../actions/atleta/pesquisarPorCpf";

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

function NumberFormatCustomCPF(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      format="###.###.###-##"
    />
  );
}

NumberFormatCustomCPF.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

function NumberFormatCustomFixo(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      format="(##) ####-####"
    />
  );
}

NumberFormatCustomFixo.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

function NumberFormatCustomCelular(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      format="(##) #####-####"
    />
  );
}

NumberFormatCustomCelular.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

class Atleta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exibirOutrosCampos: false,
      codigo: null,
      dataInclusao: null,
      email: "",
      mensagem: null
    };
  }
  renderInput = ({
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  }) => {
    const { classes } = this.props;
    return (
      <TextField
        {...rest}
        name={name}
        helperText={meta.touched ? meta.error : undefined}
        inputProps={restInput}
        onChange={onChange}
        value={value}
        className={classes.textField}
        margin="normal"
        fullWidth
      />
    );
  };

  renderInputCPF = ({
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  }) => {
    const { classes } = this.props;
    return (
      <TextField
        {...rest}
        name={name}
        helperText={meta.touched ? meta.error : undefined}
        InputProps={{
          inputComponent: NumberFormatCustomCPF
        }}
        onChange={onChange}
        value={value}
        className={classes.textField}
        margin="normal"
        fullWidth
      />
    );
  };

  renderInputFixo = ({
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  }) => {
    const { classes } = this.props;
    return (
      <TextField
        {...rest}
        name={name}
        helperText={meta.touched ? meta.error : undefined}
        InputProps={{
          inputComponent: NumberFormatCustomFixo
        }}
        onChange={onChange}
        value={value}
        className={classes.textField}
        margin="normal"
        fullWidth
      />
    );
  };

  renderInputCelular = ({
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  }) => {
    const { classes } = this.props;
    return (
      <TextField
        {...rest}
        name={name}
        helperText={meta.touched ? meta.error : undefined}
        InputProps={{
          inputComponent: NumberFormatCustomCelular
        }}
        onChange={onChange}
        value={value}
        className={classes.textField}
        margin="normal"
        fullWidth
      />
    );
  };

  renderDatePicker = ({
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  }) => {
    const { classes } = this.props;

    return (
      <TextField
        {...rest}
        helperText={meta.touched ? meta.error : undefined}
        type="date"
        value={value}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        fullWidth
      />
    );
  };

  exibirOutrosCampos() {
    if (this.state.exibirOutrosCampos) {
      return (
        <div>
          <Grid item xs={8} sm={8}>
            <Field
              name="nome"
              label="Nome"
              type="text"
              component={this.renderInput}
              maxLength={120}
              placeholder="Nome"
              validate={required}
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <Field
              id="dataNascimento"
              label="Data de Nascimento"
              name="dataInicio"
              type="date"
              component={this.renderDatePicker}
            />
          </Grid>
          <Grid item xs={8} sm={8}>
            <Field
              label="Logradouro"
              name="logradouro"
              type="text"
              component={this.renderInput}
              maxLength={120}
              placeholder="Logradouro"
            />
          </Grid>
          <Grid item xs={8} sm={4}>
            <Field
              label="Complemento"
              name="complemento"
              type="text"
              component={this.renderInput}
              maxLength={120}
              placeholder="Complemento"
            />
          </Grid>
          <Grid item xs={8} sm={3}>
            <Field
              label="Numero"
              name="numero"
              type="text"
              component={this.renderInput}
              maxLength={10}
              placeholder="Numero"
            />
          </Grid>
          <FormGroup row>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={3}>
                <Field
                  label="Telefone"
                  name="numFoneContatoEmpregador"
                  type="text"
                  component={this.renderInputFixo}
                  maxLength={15}
                  placeholder="Telefone"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Field
                  label="Celular"
                  name="numCelularContatoEmpregador"
                  type="text"
                  component={this.renderInputCelular}
                  maxLength={15}
                  placeholder="Celular"
                />
              </Grid>
            </Grid>
          </FormGroup>
        </div>
      );
    }
    return "";
  }

  descricao() {
    return this.state.exibirOutrosCampos ? "Salvar" : "Pesquisar";
  }

  onSubmit = async values => {
    if (this.state.exibirOutrosCampos) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.props.consultar();
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.props.pesquisarAtletaPorCpf(values.cpf).then(resp => {
      if (resp.payload.data.cpf === null) {
        this.setState({ exibirOutrosCampos: true });
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
          initialValues={this.state.dados}
          render={({ handleSubmit }) => (
            <form
              className={classes.container}
              onSubmit={handleSubmit}
              noValidate
            >
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
                      <Grid item xs={10} sm={3}>
                        <Field
                          label="CPF"
                          name="cpf"
                          type="text"
                          component={this.renderInputCPF}
                          maxLength={11}
                          placeholder="CPF"
                          validate={composeValidators(required, isCPF)}
                        />
                      </Grid>
                      {this.exibirOutrosCampos()}

                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        type="submit"
                      >
                        {this.descricao()}
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
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </form>
          )}
        />
      </div>
    );
  }
}

const atletaFormularioStyle = withStyles(styles)(Atleta);

export function mapStateToProps(state) {
  return {
    equipe: state.equipe
  };
}

export default connect(
  mapStateToProps,
  { pesquisarAtletaPorCpf }
)(atletaFormularioStyle);
