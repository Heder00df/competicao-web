import axios from 'axios';
import {EXCLUIR_ATLETA } from '../types';
import { SLOW_REQUEST_CONFIG } from '../../util/loadingUtil';

export default function salvarEquipe(atleta) {
    const url = '/equipe/excluir/';
    return {
        type: EXCLUIR_ATLETA,
        payload: axios.post(url, atleta, SLOW_REQUEST_CONFIG)
    }

}