import axios from 'axios'
import decode from 'jwt-decode'

import { saveSecurityToken, removeSecurityToken } from '../security/securityContext'

import { SLOW_REQUEST_CONFIG } from '../util/loadingUtil'
import { USER_LOGOUT, AUTHENTICATION_FAILED, USER_AUTHENTICATED } from './types'

export const axiosWrapper = axios

const authenticationUrl = '/api/auth'

export function validarToken (token) {
  return decode(token).exp > new Date().getTime()
}

export function isUserAuthenticated (auth) {
  return auth && auth.isUserAuthenticated && auth.tokenJwt && validarToken(auth.tokenJwt)
}

export const authenticateUser = data => dispatch => axios.post(authenticationUrl, data, SLOW_REQUEST_CONFIG)
  .then((response) => {
    const usuarioAutenticado = response.data

    const tokenDecodificado = decode(usuarioAutenticado.tokenServico.tokenJwt)
    if (!validarToken(usuarioAutenticado.tokenServico.tokenJwt)) {
      dispatch({
        type: AUTHENTICATION_FAILED,
        payload: { erro: 'Sessão Expirou' }
      })
    }

    const authentication = {
      tokenJwt: usuarioAutenticado.tokenServico.tokenJwt,
      username: data.username,
      nomeUsuario: tokenDecodificado.nus,
      orgaos: usuarioAutenticado.orgaos,
      isUserAuthenticated: true
    }
    saveSecurityToken(authentication)

    return dispatch({
      type: USER_AUTHENTICATED,
      payload: authentication
    })
  }).catch(err => dispatch({
    type: AUTHENTICATION_FAILED,
    payload: { err }
  }))

export const logoutUser = () => {
  removeSecurityToken()
  return {
    type: USER_LOGOUT,
    payload: {
      tokenJwt: null,
      isUserAuthenticated: false,
      username: null
    }
  }
}
