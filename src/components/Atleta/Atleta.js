import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

import { Field, Form } from "react-final-form";

import { withRouter } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import { withStyles } from "@material-ui/core/styles/index";

import {
  composeValidators,
  email,
  isCPF,
  required
} from "../../util/fieldLevelValidations";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  formControlFieldset: {},
  button: {
    margin: theme.spacing.unit
  }
});

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

class DadosAtletaForm extends Component {
  state = {
    isRetificacao: null,
    dados: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ dados: nextProps.dados });
  }

  renderSelect = ({
                    input: { value, name, onChange, ...restInput },
                    meta,
                    ...rest
                  }) => {
    const { classes } = this.props;
    return (
      <FormControl className={classes.formControl} fullWidth>
        <InputLabel htmlFor={name}>{rest.label}</InputLabel>
        <Select
          {...rest}
          name={name}
          inputProps={restInput}
          helperText={meta.touched ? meta.error : undefined}
          onChange={onChange}
          value={value}
          className={classes.selectField}
          margin="normal"
          id={name}
        />
      </FormControl>
    );
  };

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

  onSelect = value => {
    this.setState({ isRetificacao: value });
  };

  onChangeDate = date => {
    const copy = Object.assign({}, this.state.dados, {
      dataInicio: date,
      retificar: true
    });
    this.setState({ dados: copy });
  };

  renderValidationDate = () => {
    if (this.state.isRetificacao) {
      return (
        <Grid item xs={4} sm={2}>
          <Field
            id="dataInicio"
            label="Início da Validade"
            name="dataInicio"
            type="date"
            component={this.renderDatePicker}
          />
        </Grid>
      );
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24} justify="flex-start">
        <Form
          onSubmit={this.props.onSubmit}
          initialValues={this.state.dados}
          render={({ handleSubmit, reset, submitting }) => (
            <form
              className={classes.container}
              onSubmit={handleSubmit}
              noValidate
            >
              <FormControl
                component="fieldset"
                className={classes.formControlFieldset}
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend">Contato</FormLabel>
                <FormGroup row>
                  <Grid container spacing={24}>
                    <Grid item xs={8} sm={3}>
                      <Field
                        name="nomeContatoEmpregador"
                        label="Nome"
                        type="text"
                        component={this.renderInput}
                        maxLength={70}
                        placeholder="Nome"
                        validate={required}
                      />
                    </Grid>
                    <Grid item xs={8} sm={3}>
                      <Field
                        name="descrEmailContatoEmpregador"
                        label="E-mail"
                        type="text"
                        component={this.renderInput}
                        maxLength={60}
                        placeholder="E-mail"
                        validate={email}
                      />
                    </Grid>
                    <Grid item xs={8} sm={3}>
                      <Field
                        label="CPF"
                        name="cpfContatoEmpregador"
                        type="text"
                        component={this.renderInputCPF}
                        maxLength={11}
                        placeholder="CPF"
                        validate={composeValidators(required, isCPF)}
                      />
                    </Grid>
                  </Grid>
                </FormGroup>

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
              </FormControl>
              <Button
                color="primary"
                type="submit"
                variant="raised"
                className={classes.button}
                disabled={submitting}
              >
                Salvar
              </Button>
              <Button
                color="default"
                variant="outlined"
                className={classes.button}
                onClick={() => this.props.history.push("/")}
              >
                Cancelar
              </Button>
            </form>
          )}
        />
      </Grid>
    );
  }
}

const materialUIEnhance = withStyles(styles)(DadosAtletaForm);

const routerEnhance = withRouter(materialUIEnhance);

export default routerEnhance;
