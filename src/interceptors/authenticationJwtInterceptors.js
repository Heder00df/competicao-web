import axios from 'axios'
import { isUserAuthenticated } from '../actions/authenticationJwtActions'
import { getAuthentication } from '../security/securityContext'
import { AUTHENTICATION_FAILED } from '../actions/types'

export default function jwtInterceptor (store) {
  if (!isUserAuthenticated(getAuthentication())) {
    store.dispatch({
      type: AUTHENTICATION_FAILED,
      payload: { erro: 'Sessão Expirou' }
    })
  }
  const temToken = () => getAuthentication() && getAuthentication().tokenJwt

  const ehAuth = config => config.url && config.url === '/api/auth'

  const ehPublico = config => config.url && config.url.indexOf('/api/rest/publico') !== -1

  const onFulfilled = (config) => {
    const configuration = config
    if (temToken() && !ehAuth(configuration) && !ehPublico(configuration)) {
      configuration.headers.Authorization = `Bearer ${getAuthentication().tokenJwt}`
    }
    return configuration
  }

  const onRejected = err => Promise.reject(err)

  axios.interceptors.request.use(onFulfilled, onRejected)
}
