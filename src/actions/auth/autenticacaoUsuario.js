import axios from "axios";
import { LOGIN_USUARIO } from "../types";
import { SLOW_REQUEST_CONFIG } from "../../util/loadingUtil";

export default function autenticacaoUsuario(dadosAutenticacao) {
  const url = "/login";
  return {
    type: LOGIN_USUARIO,
    payload: axios.post(url, dadosAutenticacao, SLOW_REQUEST_CONFIG)
  };
}