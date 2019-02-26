import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { authenticateUser } from "../../actions/authenticationJwtActions";
import marcaTCU from "../../img/tcu-logo-vector.svg";

const mensagemErro = err => {
  let mensagem = "";

  if (err) {
    if (err.response.status === 401) {
      mensagem = "Dados incorretos, tente novamente";
    } else {
      mensagem = err.response
        ? `${err.response.data} ${err.response.status} ${
            err.response.statusText
          }`
        : "Erro ao efetuar login, tente novamente.";
    }
  }

  return mensagem;
};

const renderField = field => {
  const {
    meta: { touched, error }
  } = field;
  const className = `form-group ${touched && error ? "text-danger-login" : ""}`;

  return (
    <div className={className}>
      <label>{field.label}</label>
      <input
        className="form-control"
        type={field.type}
        placeholder={field.placeholder}
        {...field.input}
        autoFocus={field.input.name === "username"}
      />
      <div>{touched ? error : ""}</div>
    </div>
  );
};

class Login extends Component {
  onSubmit(values) {
    this.props.authenticateUser({
      username: values.username,
      password: values.password
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { isUserAuthenticated, err } = this.props.authentication;

    if (isUserAuthenticated) {
      return <Redirect to={from} />;
    }

    const { handleSubmit } = this.props;

    const msgClassName = `form-group ${err ? "text-danger" : ""}`;

    return (
      <form
        className="container form-login col-xl-3 col-lg-4 col-md-4"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <div className="loginHeader">
          <img src={marcaTCU} alt="Marca Tribunal de Contas da União" />
          <p> Conecta TCU</p>
        </div>
        <Field
          ref={input => {
            this.campoUsuario = input;
          }}
          label="Usuário"
          name="username"
          type="text"
          placeholder=""
          component={renderField}
        />
        <Field
          label="Senha"
          name="password"
          type="password"
          placeholder=""
          component={renderField}
        />
        <div className={msgClassName}>
          <div className="text-help">{mensagemErro(err)}</div>

          <div className="ajudaLogin">
            <p> Cadastre-se</p>
            <p> Recupere sua senha</p>
          </div>
        </div>
        <button type="submit" className="btn btn-primary botaoLogar">
          ENTRAR
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "Por favor, informe o usuário";
  }

  if (!values.password) {
    errors.password = "Por favor, informe a senha";
  }

  return errors;
}

const mapStateToProps = ({ authentication }) => ({ authentication });

const reduxConnectEnhance = connect(
  mapStateToProps,
  { authenticateUser }
)(Login);

export default reduxForm({ validate, form: "LoginForm" })(reduxConnectEnhance);
