import {
  SELECIONAR_EQUIPE,
  SALVAR_EQUIPE,
  EXCLUIR_EQUIPE,
  LIMPAR_EQUIPE
} from "../../actions/types";

export default function reducerEquipe(state = [], action) {
  switch (action.type) {
    case SELECIONAR_EQUIPE: {
      return action.payload;
    }
    case SALVAR_EQUIPE: {
      return action.payload.data;
    }
    case EXCLUIR_EQUIPE: {
      return action.payload.data;
    }
    case LIMPAR_EQUIPE: {
      return null;
    }

    default: {
      return state;
    }
  }
}
