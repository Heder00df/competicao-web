import {
  BUSCAR_COMPETICOES,
  EXCLUIR_COMPETICAO,
  LIMPAR_COMPETICAO
} from "../../actions/types";

export default function reducerCompeticoes(state = [], action) {
  switch (action.type) {
    case BUSCAR_COMPETICOES: {
      return action.payload.data;
    }
    case EXCLUIR_COMPETICAO: {
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
