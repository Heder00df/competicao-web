import {SELECIONAR_EQUIPE} from "../types";

export default function selecionarEquipe(equipe){
  return{
    type: SELECIONAR_EQUIPE,
    payload: equipe
  };
}
