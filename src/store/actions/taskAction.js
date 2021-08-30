import { actionTypes } from '../types';

export function toggleModeAction(data) {
  return {
    type: actionTypes.TOGGLE_MODE,
    data,
  };
}
