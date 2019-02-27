import axios from "axios";
import { SLOW_REQUEST_CONFIG } from "../../util/loadingUtil";

export const CONSULTAR_DADOS_EMPREGADOR = "CONSULTAR_DADOS_EMPREGADOR";
export const ERRO_AO_CONSULTAR_DADOS = "ERRO_AO_CONSULTAR_DADOS";
export const CADASTRAR_DADOS_EMPREGADOR = "CADASTRAR_DADOS_EMPREGADOR";
export const ERRO_AO_CADASTRAR_DADOS = "ERRO_AO_CADASTRAR_DADOS";

export const consultar = () => dispatch => {
  axios
    .get("/atleta/atletas", SLOW_REQUEST_CONFIG)
    .then(response => {
      dispatch({
        type: CONSULTAR_DADOS_EMPREGADOR,
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
        type: CADASTRAR_DADOS_EMPREGADOR,
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
