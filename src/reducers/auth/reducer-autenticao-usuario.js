import {LOGIN_USUARIO} from "../../actions/types";

export default function  reducerAutenticacaoUsuario ( state = [], action) {
  switch (action.type) {
    case LOGIN_USUARIO: {
      return action.payload.data;
    }

    default:{
      return state;
    }
  }
}
