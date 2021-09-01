import { actionTypes } from '../types';

const initialState = {
  privilege: [],
};

function partnersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRIVILEGE:
      return {
        ...state,
      };
    case actionTypes.GET_PRIVILEGE_SUCCESS:
      return {
        ...state,
        privilege: action.data,
      };

    default:
      return state;
  }
}

export default partnersReducer;
