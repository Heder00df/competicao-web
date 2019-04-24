import axios from "axios";
import { BUSCAR_COMPETICOES } from "../types";
import { SLOW_REQUEST_CONFIG } from "../../util/loadingUtil";

export default function bucarCompeticoes() {
  const url = "/competicao/competicoes";
  return {
    type: BUSCAR_COMPETICOES,
    payload: axios.get(url, SLOW_REQUEST_CONFIG)
  };
}
