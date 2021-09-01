import { actionTypes } from '../types';

const initialState = {
  menuList: [],
  partnersMenuList: [],
  partners: [],
  offers: [],
  bonus: [],
};

function partnersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_MENU_LIST:
      return {
        ...state,
      };
    case actionTypes.GET_MENU_LIST_SUCCESS:
      return {
        ...state,
        menuList: action.data,
      };

    case actionTypes.GET_PARTNERS_MENU_LIST:
      return {
        ...state,
      };
    case actionTypes.GET_PARTNERS_MENU_LIST_SUCCESS:
      return {
        ...state,
        partnersMenuList: action.data,
      };

    case actionTypes.GET_PARTNERS:
      return {
        ...state,
      };
    case actionTypes.GET_PARTNERS_SUCCESS:
      return {
        ...state,
        partners: action.data,
      };

    case actionTypes.GET_OFFERS:
      return {
        ...state,
      };
    case actionTypes.GET_OFFERS_SUCCESS:
      return {
        ...state,
        offers: action.data,
      };

    case actionTypes.GET_BONUS:
      return {
        ...state,
      };
    case actionTypes.GET_BONUS_SUCCESS:
      return {
        ...state,
        bonus: action.data,
      };
    default:
      return state;
  }
}

export default partnersReducer;
