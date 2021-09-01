import { actionTypes } from '../types';
import { deliverToReducer } from '../../helpers/api-helper';
import { call, put } from 'redux-saga/effects';

export function getMenuListAction() {
  return { type: actionTypes.GET_MENU_LIST };
}
export function* getMenuListSaga(action) {
  try {
    const res = yield call(() => fetch(`http://localhost:5000/menuList`));
    const data = yield res.json();

    yield put(deliverToReducer(action.type, data, res.status));
  } catch (err) {
    console.log('err', err);
  }
}

export function getPartnersMenuListAction() {
  return { type: actionTypes.GET_PARTNERS_MENU_LIST };
}
export function* getPartnersMenuListSaga(action) {
  try {
    const res = yield call(() =>
      fetch(`http://localhost:5000/partnersMenuList`)
    );
    const data = yield res.json();

    yield put(deliverToReducer(action.type, data, res.status));
  } catch (err) {
    console.log('err', err);
  }
}

export function getPartnersAction() {
  return { type: actionTypes.GET_PARTNERS };
}
export function* getPartnersSaga(action) {
  try {
    const res = yield call(() => fetch(`http://localhost:5000/partners`));
    const data = yield res.json();

    yield put(deliverToReducer(action.type, data, res.status));
  } catch (err) {
    console.log('err', err);
  }
}

export function getOffersAction() {
  return { type: actionTypes.GET_OFFERS };
}
export function* getOffersSaga(action) {
  try {
    const res = yield call(() => fetch(`http://localhost:5000/offers`));
    const data = yield res.json();

    yield put(deliverToReducer(action.type, data, res.status));
  } catch (err) {
    console.log('err', err);
  }
}

export function getBonusAction() {
  return { type: actionTypes.GET_BONUS };
}
export function* getBonusSaga(action) {
  try {
    const res = yield call(() => fetch(`http://localhost:5000/bonus`));
    const data = yield res.json();

    yield put(deliverToReducer(action.type, data, res.status));
  } catch (err) {
    console.log('err', err);
  }
}
