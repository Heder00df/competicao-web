import { LIMPAR_COMPETICAO, SELECIONAR_COMPETICAO } from "../../actions/types";

export default function reducerCompeticao(state = [], action) {
  switch (action.type) {
    case SELECIONAR_COMPETICAO: {
      return action.payload.data;
    }
    case LIMPAR_COMPETICAO: {
      return [];
    }
    default: {
      return state;
    }
  }
}
