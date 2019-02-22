import axios from "axios";

import {
  SLOW_REQUEST_HEADER,
  iniciarLoading,
  finalizarLoading
} from "../util/loadingUtil";

const onRejected = err => {
  if (err.config && err.config.headers[SLOW_REQUEST_HEADER]) {
    finalizarLoading();
  }
  return Promise.reject(err);
};

axios.interceptors.request.use(config => {
  if (config.headers[SLOW_REQUEST_HEADER]) {
    iniciarLoading();
  }
  return config;
}, onRejected);

axios.interceptors.response.use(response => {
  if (response.config.headers[SLOW_REQUEST_HEADER]) {
    finalizarLoading();
  }
  return response;
}, onRejected);
