import Actions from "actions";
import * as storage from "libs/storage.js";

let storagedUsers = storage.get();

const initialState = {
  fetching: true,
  fetchingSucc: false,
  fetchingErr: false,
  users: storagedUsers ? storagedUsers : []
};

function user(state = initialState, action) {
  switch (action.type) {
    case Actions.User.CREATE:
      return {
        ...state,
        fetching: true,
        fetchingSucc: false,
        fetchingErr: false
      };
    case Actions.User.CREATE_SUCC:
      return {
        ...state,
        fetching: false,
        fetchingSucc: true,
        fetchingErr: false,
        users: [...state.users, action.payload.user]
      };
    case Actions.User.CREATE_ERR:
      return {
        ...state,
        fetching: false,
        fetchingSucc: false,
        fetchingErr: true
      };
    default:
      return state;
  }
}

export default user;
