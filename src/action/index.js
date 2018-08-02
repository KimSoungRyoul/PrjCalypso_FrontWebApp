import * as types from "./actionTypes";
import axios from "axios";

const ROOT_URL = "http://localhost:3000";

export async function actionLogin(value) {
  const request = axios.post(`${ROOT_URL}/auth/login`, value);

  return {
    type: types.LOGIN,
    payload: request
  };
}
