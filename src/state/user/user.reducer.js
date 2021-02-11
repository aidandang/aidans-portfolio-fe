import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isCheckingAuth: true
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isCheckingAuth: false
      };
    default:
      return state;
  }
}

export default userReducer;