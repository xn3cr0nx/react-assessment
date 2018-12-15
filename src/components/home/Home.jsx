import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TitleAction from "components/TitleAction.jsx";

import "./Home.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let users = this.props.users.users.map(user => {
			return (
				<li>
					<Link to={`user?id=${user.id}`}>{user.name}</Link>
				</li>
			);
		});

		return (
			<div className="home">
        <TitleAction title="Users" button="new"/>
				<ul>{users}</ul>
			</div>
		);
	}
}

Home.propTypes = {
	users: PropTypes.array.isRequired
};

export default Home;
