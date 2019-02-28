import axios from "axios";
import { SALVAR_ATLETA } from "../types";
import { SLOW_REQUEST_CONFIG } from "../../util/loadingUtil";

export default function salvarAtleta(atleta) {
  const url = "/atleta/incluir/";
  return {
    type: SALVAR_ATLETA,
    payload: axios.post(url, atleta, SLOW_REQUEST_CONFIG)
  };
}
