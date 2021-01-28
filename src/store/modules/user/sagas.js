import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { getUserFailure, getUserSuccess, Types } from './actions';
import { showMessage } from '../../../utils';

export function* getUser(value) {
  try {
    const response = yield call(api.post, 'users/auth/sign_in', value.loginValue);
    console.log('data', response.data);
    yield put(getUserSuccess(response.data));
  } catch (error) {
    yield put(getUserFailure(error));
    showMessage(error.message || 'Erro desconhecido');
  }
}

export default all([takeLatest(Types.USER_REQUEST, getUser)]);
