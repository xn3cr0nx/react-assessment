import TitleAction from "components/TitleAction.jsx";
import "css/users.css";
import PropTypes from "prop-types";
import qs from "qs";
import React, { Component } from "react";

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "new",
			id: "",
			name: ""
		};
	}

	handleName = e => {
		this.setState({ name: e.target.value });
	};

	saveUser = () => {
		this.props.createUser({ name: this.state.name });
		this.setState({ name: "" });
	};

	updateUser = () => {
		this.props.updateUser({ id: this.state.id, name: this.state.name });
		this.setState({ name: "" });
	};

	componentDidMount() {
		const values = qs.parse(this.props.location.search.slice(1));
		if (values.id) {
			this.setState({ type: "edit", id: values.id });
		}
		this.props.resetFetching();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			!prevProps.users.fetchingSucc &&
			this.props.users.fetchingSucc &&
			prevProps.users.list.length < this.props.users.list.length
		)
			this.props.history.push("/");
	}

	handleKeyPress = e => {
		if (e.key == "Enter") {
			this.state.type === "new" ? this.saveUser() : this.updateUser();
		}
	};

	render() {
		const { users } = this.props;

		return (
			<div className="container" onKeyPress={this.handleKeyPress}>
				{this.state.type === "new" ? (
					<div>
						<TitleAction title="new user" button="save" action={this.saveUser} />
						<div className="name">
							<label htmlFor="name">name</label>
							<input id="name" type="text" value={this.state.name} onChange={this.handleName} />
						</div>
					</div>
				) : (
					<div>
						<TitleAction
							title={users.list.filter(user => user.id == this.state.id)[0].name}
							button="save"
							action={this.updateUser}
						/>
						<div className="name">
							<label htmlFor="name">name</label>
							<input id="name" type="text" value={this.state.name} onChange={this.handleName} />
						</div>
					</div>
				)}
			</div>
		);
	}
}

Users.propTypes = {
	users: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default Users;
