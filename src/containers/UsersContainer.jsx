import Actions from "actions";
import { connect } from "react-redux";
import Users from "components/Users.jsx";

const mapStateToProps = state => {
	return {
		users: state.users
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createUser: user => {
			dispatch(Actions.Users.CreateUser(user));
		},
		updateUser: user => {
			dispatch(Actions.Users.UpdateUser(user));
		},
		resetFetching: () => {
			dispatch(Actions.Users.ResetFetching());
		}
	};
};

const UsersContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Users);

export default UsersContainer;
