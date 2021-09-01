import { all, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../store/types';
import {
  getMenuListSaga,
  getPartnersSaga,
  getOffersSaga,
  getBonusSaga,
  getPartnersMenuListSaga,
} from './sagas/partnersSaga';
import { getPrivilegeSaga } from './sagas/thanksSaga';

export function* rootSaga() {
  yield all([
    takeLatest(actionTypes.GET_MENU_LIST, getMenuListSaga),
    takeLatest(actionTypes.GET_PARTNERS_MENU_LIST, getPartnersMenuListSaga),
    takeLatest(actionTypes.GET_PARTNERS, getPartnersSaga),
    takeLatest(actionTypes.GET_OFFERS, getOffersSaga),
    takeLatest(actionTypes.GET_BONUS, getBonusSaga),
    takeLatest(actionTypes.GET_PRIVILEGE, getPrivilegeSaga),
  ]);
}

export default rootSaga;
