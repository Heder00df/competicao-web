import { combineReducers } from 'redux'
import equipes from './equipe/reducer-equipe'
import usuarioAutenticado from './auth/reducer-autenticao-usuario'

export default combineReducers({
  equipes,

  usuarioAutenticado

});