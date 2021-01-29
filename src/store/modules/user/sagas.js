import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { getUserFailure, getUserSuccess, Types } from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from '../../../utils';

const token = 'access-token';

export function* getUser(value) {
  try {
    const response = yield call(api.instance().post, 'users/auth/sign_in', value.loginValue);
    const headers = response.headers;
    const header = {
      token: headers[token],
      uid: headers.uid,
      client: headers.client,
    };
    yield AsyncStorage.setItem('token', JSON.stringify(header));
    yield put(getUserSuccess({ ...response.data, ...response.headers }));
  } catch (error) {
    yield put(getUserFailure(error));
    showMessage(error.errors[0] || 'Erro desconhecido');
  }
}

export function* doLogout() {
  yield put(getUserSuccess(null));
}

export default all([
  takeLatest(Types.USER_REQUEST, getUser),
  takeLatest(Types.USER_LOGOUT, doLogout),
]);
