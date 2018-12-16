import Actions from "actions";
import * as storage from "libs/storage.js";

let storagedUsers = storage.get();

const initialState = {
	fetching: false,
	fetchingSucc: false,
	fetchingErr: false,
	list: storagedUsers ? storagedUsers : []
};

function user(state = initialState, action) {
	switch (action.type) {
		case Actions.Users.CREATE:
			return {
				...state,
				fetching: true,
				fetchingSucc: false,
				fetchingErr: false
			};
		case Actions.Users.CREATE_SUCC:
			return {
				...state,
				fetching: false,
				fetchingSucc: true,
				fetchingErr: false,
				list: [...state.list, action.payload]
			};
		case Actions.Users.CREATE_ERR:
			return {
				...state,
				fetching: false,
				fetchingSucc: false,
				fetchingErr: true
			};
		case Actions.Users.UPDATE:
			return {
				...state,
				fetching: true,
				fetchingSucc: false,
				fetchingErr: false
			};
		case Actions.Users.UPDATE_SUCC:
			return {
				...state,
				fetching: false,
				fetchingSucc: true,
				fetchingErr: false,
				list: [...state.list.slice(0, action.payload.id - 1), action.payload, ...state.list.slice(action.payload.id)]
			};
		case Actions.Users.UPDATE_ERR:
			return {
				...state,
				fetching: false,
				fetchingSucc: false,
				fetchingErr: true
			};
		case Actions.Users.RESET_FETCH:
			return {
				...state,
				fetching: false,
				fetchingSucc: false,
				fetchingErr: false
			};
		default:
			return state;
	}
}

export default user;
