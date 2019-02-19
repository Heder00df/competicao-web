import axios from 'axios';
import {BUSCAR_ATLETAS} from "../types";
import {SLOW_REQUEST_CONFIG} from "../../util/loadingUtil";

export default function bucarEquipes(){
  const url = '/atleta/atletas';
  return{
    type: BUSCAR_ATLETAS,
    payload: axios.get(url,SLOW_REQUEST_CONFIG)

  };
}
