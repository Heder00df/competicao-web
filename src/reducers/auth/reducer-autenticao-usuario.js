import { LOGIN_USUARIO } from "../../actions/types";

export default function reducerAutenticacaoUsuario(state = [], action) {
  switch (action.type) {
    case LOGIN_USUARIO: {
      if (action.payload !== null && action.payload.headers !== undefined) {
        const usuarioAutenticado = {
          tokenJwt: action.payload.headers.authorization.substr(7),
          username: '',
          isUserAuthenticated: true
        };
        return usuarioAutenticado;
      }

      return null;
    }

    default: {
      return state;
    }
  }
}
