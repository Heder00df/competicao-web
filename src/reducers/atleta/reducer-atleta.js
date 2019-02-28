import {
  BUSCAR_ATLETAS,
  SELECIONAR_ATLETA,
  SALVAR_ATLETA,
  EXCLUIR_ATLETA,
  PESQUISAR_POR_CPF
} from "../../actions/types";

export default function reducerAtleta(state = [], action) {
  switch (action.type) {
    case BUSCAR_ATLETAS: {
      return action.payload.data;
    }
    case SELECIONAR_ATLETA: {
      return action.payload;
    }
    case SALVAR_ATLETA: {
      return action.payload.data;
    }
    case EXCLUIR_ATLETA: {
      return action.payload.data;
    }
    case PESQUISAR_POR_CPF: {
      return action.payload.data;
    }

    default: {
      return state;
    }
  }
}
