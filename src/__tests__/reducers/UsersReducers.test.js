import user from "reducers/UserReducers";
import * as Actions from "actions/UserActions";

const initialState = {
	fetching: false,
	fetchingSucc: false,
	fetchingErr: false,
	list: []
};

describe("users reducer", () => {
	it("should return the initial state", () => {
		expect(user(undefined, {})).toEqual(initialState);
	});

	it("should create a user", () => {
		expect(
			user(initialState, {
				type: Actions.CREATE_SUCC,
				payload: {
					id: 1,
					name: "Test",
					friends: []
				}
			})
		).toEqual({
			fetching: false,
			fetchingSucc: true,
			fetchingErr: false,
			list: [
				{
					id: 1,
					name: "Test",
					friends: []
				}
			]
		});
	});

	it("should reset fetching", () => {
		initialState.fetchingSucc = true;
		expect(
			user(initialState, {
				type: Actions.RESET_FETCH,
				payload: {
					id: 1,
					name: "Test",
					friends: []
				}
			})
		).toEqual({
			fetching: false,
			fetchingSucc: false,
			fetchingErr: false,
			list: []
		});
	});
});
