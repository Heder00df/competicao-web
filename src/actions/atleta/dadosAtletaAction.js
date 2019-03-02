import axios from "axios";
import { SLOW_REQUEST_CONFIG } from "../../util/loadingUtil";
import {
  PESQUISAR_POR_CPF,
  BUSCAR_ATLETAS,
  SALVAR_ATLETA,
  ERRO_AO_CONSULTAR_DADOS,
  ERRO_AO_CADASTRAR_DADOS
} from "../types";

export const consultar = () => dispatch => {
  axios
    .get("/atleta/atletas", SLOW_REQUEST_CONFIG)
    .then(response => {
      dispatch({
        type: BUSCAR_ATLETAS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: ERRO_AO_CONSULTAR_DADOS,
        payload: error
      });
    });
};
export const pesquisarAtletaPorCpf = cpf => dispatch => {
  axios
    .get(`/atleta/cpf/${cpf}`, SLOW_REQUEST_CONFIG)
    .then(response => {
      dispatch({
        type: PESQUISAR_POR_CPF,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: ERRO_AO_CONSULTAR_DADOS,
        payload: error
      });
    });
};

export const cadastrar = data => dispatch => {
  axios
    .post("/atleta/incluir", data, SLOW_REQUEST_CONFIG)
    .then(response => {
      dispatch({
        type: SALVAR_ATLETA,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: ERRO_AO_CADASTRAR_DADOS,
        payload: error
      });
    });
};
