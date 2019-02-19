import axios from "axios";
import { BUSCAR_EQUIPES } from "../types";
import { SLOW_REQUEST_CONFIG } from "../../util/loadingUtil";

export default function bucarEquipes() {
  const url = "/equipe/equipes";
  return {
    type: BUSCAR_EQUIPES,
    payload: axios.get(url, SLOW_REQUEST_CONFIG)
  };
}
