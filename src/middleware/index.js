import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import usersMiddleware from "./usersMiddleware";

function* log(action) {
	console.log("ACT", action);
}

function* RootMiddleware() {
	yield all([takeEvery("*", log), call(usersMiddleware)]);
}

export default RootMiddleware;
