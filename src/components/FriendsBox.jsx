import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "components/Button.jsx";

const FriendsBox = props => {
	let friends = props.friends.map(friend => {
		return (
			<li key={friend} className="check_input">
				{friend}
				<Button id={friend} onClick={props.removeFriend}>
					remove
				</Button>
			</li>
		);
	});

	return (
		<div>
			<p>friends</p>
			<div className="friends_box">
				<div className="friends_actions">
					<Button onClick={props.openModal}>select friend</Button>
					<Button onClick={props.newFriend}>new friend</Button>
				</div>
				<ul>{friends}</ul>
			</div>
		</div>
	);
};

FriendsBox.propTypes = {
	friends: PropTypes.array.isRequired,
	removeFriend: PropTypes.func,
	newFriend: PropTypes.func,
	openModal: PropTypes.func
};

export default FriendsBox;
