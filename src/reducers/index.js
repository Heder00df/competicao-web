import { combineReducers } from "redux";
import equipes from "./equipe/reducer-equipes";
import equipe from "./equipe/reducer-equipe";
import usuarioAutenticado from "./auth/reducer-autenticao-usuario";
import atleta from "./atleta/reducer-atleta";

export default combineReducers({
  equipes,
  equipe,

  atleta,

  usuarioAutenticado
});
