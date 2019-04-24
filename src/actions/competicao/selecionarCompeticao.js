import { SELECIONAR_COMPETICAO } from "../types";

export default function selecionarCompeticao(competicao) {
  return {
    type: SELECIONAR_COMPETICAO,
    payload: competicao
  };
}
