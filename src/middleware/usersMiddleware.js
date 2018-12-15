import "regenerator-runtime/runtime";
import * as storage from "libs/storage.js";
import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import { delay } from "redux-saga";
import Actions from "actions";
import { store } from "store.js";

// this module simulates the interaction with the server and edits the state of the
// application based on its answers
function* createUser(action) {
	try {
		// const response = yield call(Api.User.Language, action.payload);
		let user = Object.assign({}, action.payload, { id: store.getState().users.list.length + 1 });
		let storaged = storage.get();
		if (storaged) {
			storaged = [...storaged, user];
		} else {
			storaged = [user];
		}
		yield call(storage.set, storaged);
		yield put(Actions.Users.CreateUserSucc(user));
	} catch (err) {
		yield put(Actions.Users.CreateUserErr(err));
	}
}

function* updateUser(action) {
	try {
		yield put(Actions.Users.UpdateUserSucc(action.payload));
	} catch (err) {
		yield put(Actions.Users.UpdateUserErr(err));
	}
}

export default function* usersMiddleware() {
	yield takeLatest(Actions.Users.CREATE, createUser);
	yield takeLatest(Actions.Users.UPDATE, updateUser);
}
