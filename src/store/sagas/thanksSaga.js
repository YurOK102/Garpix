import { actionTypes } from '../types';
import { deliverToReducer } from '../../helpers/api-helper';
import { call, put } from 'redux-saga/effects';

export function getPrivilegeAction() {
  return { type: actionTypes.GET_PRIVILEGE };
}
export function* getPrivilegeSaga(action) {
  try {
    const res = yield call(() => fetch(`http://localhost:5000/privilege`));
    const data = yield res.json();

    yield put(deliverToReducer(action.type, data, res.status));
  } catch (err) {
    console.log('err', err);
  }
}
