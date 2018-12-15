export const CREATE = "@@/user/create";
export const CREATE_SUCC = "@@/user/create/succ";
export const CREATE_ERR = "@@/user/create/err";

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
