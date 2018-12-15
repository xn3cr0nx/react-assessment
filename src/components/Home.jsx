import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TitleAction from "components/TitleAction.jsx";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	newUserPage = () => {
		this.props.history.push("/user");
	};

	render() {
		let users = this.props.users.list.map(user => {
			return (
				<li key={user.name}>
					<Link to={`user?id=${user.id}`}>{user.name}</Link>
				</li>
			);
		});

		return (
			<div className="container">
				<TitleAction title="Users" button="new" action={this.newUserPage} />
				<ul>{users}</ul>
			</div>
		);
	}
}

Home.propTypes = {
	users: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default Home;
