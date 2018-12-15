export const CREATE = "@@/user/create";
export const CREATE_SUCC = "@@/user/create/succ";
export const CREATE_ERR = "@@/user/create/err";

export const UPDATE = "@@/user/update";
export const UPDATE_SUCC = "@@/user/update/succ";
export const UPDATE_ERR = "@@/user/update/err";

export const RESET_FETCH = "@@/user/reset";

export const CreateUser = user => ({
	type: CREATE,
	payload: user
});

export const CreateUserSucc = user => ({
	type: CREATE_SUCC,
	payload: user
});

export const CreateUserErr = err => ({
	type: CREATE_ERR,
	payload: err
});

export const UpdateUser = user => ({
	type: UPDATE,
	payload: user
});

export const UpdateUserSucc = user => ({
	type: UPDATE_SUCC,
	payload: user
});

export const UpdateUserErr = err => ({
	type: UPDATE_ERR,
	payload: err
});

export const ResetFetching = () => ({
	type: RESET_FETCH
});
