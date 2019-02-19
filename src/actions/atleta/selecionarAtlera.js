import {SELECIONAR_EQUIPE} from "../types";

export default function selecionarAtlera(atleta){
  return{
    type: SELECIONAR_EQUIPE,
    payload: atleta
  };
}
