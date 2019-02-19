import axios from 'axios';
import { EXCLUIR_EQUIPE } from '../types';
import { SLOW_REQUEST_CONFIG } from '../../util/loadingUtil';

export default function salvarEquipe(equipe) {
    const url = '/equipe/excluir/';
    return {
        type: EXCLUIR_EQUIPE,
        payload: axios.post(url, equipe, SLOW_REQUEST_CONFIG)
    }

}