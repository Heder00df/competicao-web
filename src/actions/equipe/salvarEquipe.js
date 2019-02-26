import axios from "axios";
import { SALVAR_EQUIPE } from "../types";
import { SLOW_REQUEST_CONFIG } from "../../util/loadingUtil";

export default function salvarEquipe(equipe) {
  const url = "/equipe/incluir/";
  return {
    type: SALVAR_EQUIPE,
    payload: axios.post(url, equipe, SLOW_REQUEST_CONFIG)
  };
}
