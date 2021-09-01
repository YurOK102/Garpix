import { actionTypes } from '../types';

export function menuListAction(data) {
  return {
    type: actionTypes.GET_MENU_LIST,
    data,
  };
}
