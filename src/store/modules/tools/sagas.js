import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import {
  addToolSuccess,
  removeToolSuccess,
  searchToolsSuccess,
} from './actions';

function* searchTools({ searchParams }) {
  let data = [];

  if (searchParams.searchOnlyTags && searchParams.searchValue) {
    data = yield call(api.get, `/tools?tags_like=${searchParams.searchValue}`);
  } else if (searchParams.searchValue) {
    data = yield call(api.get, `/tools?q=${searchParams.searchValue}`);
  } else {
    data = yield call(api.get, '/tools');
  }

  yield put(searchToolsSuccess(data));
}

function* addTool({ tool }) {
  const { data } = yield call(api.post, `/tools/`, tool);

  yield put(addToolSuccess(data));

  toast.success('Ferramenta adicionada com sucesso! :)');
}

function* removeTool({ id }) {
  yield call(api.delete, `/tools/${id}`);

  yield put(removeToolSuccess(id));

  toast.success('Ferramenta removida com sucesso! :)');
}

export default all([
  takeLatest('@tools/SEARCH_REQUEST', searchTools),
  takeLatest('@tools/ADD_REQUEST', addTool),
  takeLatest('@tools/REMOVE_REQUEST', removeTool),
]);
