import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { Types, enterpriseListFailure, enterpriseListSuccess, updateList } from './actions';
import { showMessage } from '../../../utils';

export function* getEnterprises() {
  yield doCall('enterprises');
}

export function* updateEnterprises(data) {
  yield doCall('enterprises?enterprise_types=' + data.search.type + '&name=' + data.search.query);
}

function* doCall(url) {
  try {
    const response = yield call(api.instance().get, url);
    yield put(enterpriseListSuccess(response.data.enterprises));
  } catch (error) {
    yield put(enterpriseListFailure(error));
    showMessage(error.errors[0] || 'Erro desconhecido');
  }
}

export default all([
  takeLatest(Types.ENTERPRISE_LIST_REQUEST, getEnterprises),
  takeLatest(Types.UPDATE_LIST, updateEnterprises),
]);
