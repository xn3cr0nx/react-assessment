import Actions from "actions";
import * as storage from "libs/storage.js";
import { call, put, takeLatest } from "redux-saga/effects";
import "regenerator-runtime/runtime";
import { store } from "store.js";
let retry = 0;

// this module simulates the interaction with the server and edits the state of the
// application based on its answers

function fakeAPI() {
	// if (Math.random() >= 0.5) throw "random error";
	throw "random error";
}

function* createUser(action) {
	try {
		fakeAPI();
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
		if (!retry) {
			retry++;
			return yield call(createUser, action);
		}
		retry = 0;
		yield put(Actions.Users.CreateUserErr(err));
	}
}

function* updateUser(action) {
	try {
		fakeAPI();
		let storaged = storage.get();
		if (storaged) {
			storaged = [...storaged.slice(0, action.payload.id - 1), action.payload, ...storaged.slice(action.payload.id)];
		} else {
			storaged = [action.payload];
		}
		yield call(storage.set, storaged);
		yield put(Actions.Users.UpdateUserSucc(action.payload));
	} catch (err) {
		if (!retry) {
			retry++;
			return yield call(updateUser, action);
		}
		retry = 0;
		yield put(Actions.Users.UpdateUserErr(err));
	}
}

export default function* usersMiddleware() {
	yield takeLatest(Actions.Users.CREATE, createUser);
	yield takeLatest(Actions.Users.UPDATE, updateUser);
}
