import React from 'react'
import ReactGA from 'react-ga';
import { hotjar } from 'react-hotjar'
import { Route, Switch, withRouter } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import Login from '../componentes/auth/Login'
import Logout from '../componentes/auth/Logout'
import Processos from '../componentes/processos/Processos'
import PainelProcessos from '../componentes/processos/PainelProcessos'
import Determinacoes from '../componentes/determinacoes/Determinacoes'
import Acordaos from '../componentes/acordaos/Acordaos'
import Perfis from '../componentes/perfis/PerfilUsuario'
import PaginaInicial from '../componentes/PaginaInicial'
import ResumoDeterminacoes from '../componentes/determinacoes/ResumoDeterminacoes'
import ResumoAcordaos from '../componentes/acordaos/ResumoAcordaos'
import { isAmbienteProd, setBrowserHistory } from '../util/applicationContext'
import Recibo from '../componentes/recibo/Recibo';
import Eventos from '../componentes/eventos/Eventos';
import HistoricoEventos from '../componentes/eventos/PainelEventos';
import PainelComunicacoes from '../componentes/comunicacoes/PainelComunicacoes';

export const listenHotjar = (history) => {
  hotjar.initialize(1078535, 6)
  history.listen(location => window.hj('stateChange', location.pathname))
}

export const listenReactga = (history) => {
  ReactGA.initialize('UA-128507666-1')
  history.listen((location) => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
  })
}


export class AppRoutes extends React.Component {
  constructor (props) {
    super(props);
    const { history } = this.props;
    setBrowserHistory(history)
  }

  componentDidMount () {
    if (isAmbienteProd()) {
      const { history } = this.props
      listenHotjar(history)
      listenReactga(history)
    }
  }

  render () {
    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>

        <AuthenticatedRoute path='/processos' component={Processos}/>
        <AuthenticatedRoute path='/painel-processos' component={PainelProcessos}/>
        <AuthenticatedRoute path='/determinacoes' component={Determinacoes}/>
        <AuthenticatedRoute path='/painel-determinacoes' component={ResumoDeterminacoes}/>
        <AuthenticatedRoute path='/acordaos' component={Acordaos}/>
        <AuthenticatedRoute path='/painel-acordaos' component={ResumoAcordaos}/>
        <AuthenticatedRoute path='/perfis' component={Perfis}/>
        <AuthenticatedRoute path='/recibo/id/:id' component={Recibo}/>
        <AuthenticatedRoute path='/eventos' component={Eventos}/>
        <AuthenticatedRoute path='/painel-eventos' component={HistoricoEventos}/>
        <AuthenticatedRoute path='/painel-comunicacoes' component={PainelComunicacoes}/>

        <AuthenticatedRoute path='/' component={PaginaInicial}/>
      </Switch>
    )
  }
}

export default withRouter(AppRoutes)
