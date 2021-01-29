import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { Types, enterpriseListFailure, enterpriseListSuccess, updateList } from './actions';
import { showMessage } from '../../../utils';

export function* getEnterprises() {
  try {
    const response = yield call(api.instance().get, 'enterprises');
    yield put(enterpriseListSuccess(response.data.enterprises));
  } catch (error) {
    yield put(enterpriseListFailure(error));
    showMessage(error.message || 'Erro desconhecido');
  }
}

export function* updateEnterprises(data) {
  try {
    const response = yield call(api.instance().get, 'enterprises?enterprise_types=3&name=F');
    yield put(enterpriseListSuccess(response.data.enterprises));
  } catch (error) {
    yield put(enterpriseListFailure(error));
    showMessage(error.message || 'Erro desconhecido');
  }
}

export default all([
  takeLatest(Types.ENTERPRISE_LIST_REQUEST, getEnterprises),
  takeLatest(Types.UPDATE_LIST, updateEnterprises),
]);
