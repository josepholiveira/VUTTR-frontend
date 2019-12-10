import { all } from 'redux-saga/effects';

import tools from './tools/sagas';

export default function* rootSaga() {
  return yield all([tools]);
}
