import cpf from "@fnando/cpf/dist/node";
import cnpj from "@fnando/cnpj/dist/node";
import {
  REQUIRED,
  INVALID_CNPJ,
  INVALID_CPF,
  INVALID_EMAIL,
  MUST_BE_A_NUMBER,
  MUST_BE_ALPHANUMERIC
} from "./messages";

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const required = value => (value || value === 0 ? undefined : REQUIRED);

export const selectRequired = value => (value !== null ? undefined : REQUIRED);

export const maxLength = max => value =>
  value && value.length > max
    ? `Deve ter ${max} caracteres ou menos`
    : undefined;

export const minLength = min => value =>
  value && value.length < min
    ? `Deve ter ${min} caracteres ou mais`
    : undefined;

export const number = value =>
  value && isNaN(Number(value)) ? MUST_BE_A_NUMBER : undefined;

export const  minValue = min => value =>
  value && value < min ? `Deve ser maior ou igual a ${min}` : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? INVALID_EMAIL
    : undefined;

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9]/i.test(value) ? MUST_BE_ALPHANUMERIC : undefined;

export const isCNPJ = value =>
  value && !cnpj.isValid(value) ? INVALID_CNPJ : undefined;

export const isCPF = value =>
  value && !cpf.isValid(value) ? INVALID_CPF : undefined;

export const isExistCPF = value => {
  return value && isCPF ? undefined : INVALID_CPF;
};
