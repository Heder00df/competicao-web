import axios from "axios";
import { PESQUISAR_POR_CPF } from "../types";
import { SLOW_REQUEST_CONFIG } from "../../util/loadingUtil";
export default function pesquisarPorCpf(cpf) {
  const url = `/atleta/cpf/${cpf}`;
  return {
    type: PESQUISAR_POR_CPF,
    payload: axios.get(url, SLOW_REQUEST_CONFIG)
  };
}
