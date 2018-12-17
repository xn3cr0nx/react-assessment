import * as Actions from "actions/UserActions.js";

describe("actions", () => {
	it("should create an action to create a user", () => {
		const user = {};
		const expectedAction = {
			type: Actions.CREATE,
			payload: user
		};
		expect(Actions.CreateUser(user)).toEqual(expectedAction);
	});

	it("should create an action to update a user", () => {
		const user = {};
		const expectedAction = {
			type: Actions.UPDATE,
			payload: user
		};
		expect(Actions.UpdateUser(user)).toEqual(expectedAction);
	});

	it("should create an action to reset store's fetching variables", () => {
		const expectedAction = {
			type: Actions.RESET_FETCH
		};
		expect(Actions.ResetFetching()).toEqual(expectedAction);
	});
});
