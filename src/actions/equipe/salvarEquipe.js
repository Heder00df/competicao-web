import axios from 'axios';
import { SALVAR_EQUIPE } from '../types';
import { SLOW_REQUEST_CONFIG } from '../../util/loadingUtil';

export default function salvarEquipe(nome) {
    const url = '/equipe/incluir/';
    return {
        type: SALVAR_EQUIPE,
        payload: axios.post(url, nome, SLOW_REQUEST_CONFIG)
    }

}