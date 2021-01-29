import { all } from 'redux-saga/effects';

import user from './user/sagas';
import enterprises from './enterprise/sagas';

export default function* rootSaga() {
  return yield all([user, enterprises]);
}
