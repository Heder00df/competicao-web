import { combineReducers } from "redux";
import equipes from "./equipe/reducer-equipes";
import equipe from "./equipe/reducer-equipe";
import usuarioAutenticado from "./auth/reducer-autenticao-usuario";
import atleta from "./atleta/reducer-atleta";
import messages from "./messagesReducer";
import competicoes from "./competicao/reducer-competicoes";
import competicao from "./competicao/reducer-competicao";

export default combineReducers({
  equipes,
  equipe,

  atleta,

  competicao,
  competicoes,

  messages,

  usuarioAutenticado
});
