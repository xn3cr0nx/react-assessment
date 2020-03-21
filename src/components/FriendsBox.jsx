import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button.jsx";

const FriendsBox = props => {
	let friends = props.friends.map(friend => {
		return (
			<li key={friend} className="check_input">
				{friend}
				<Button id={friend} onClick={props.removeFriend}>
					Remove
				</Button>
			</li>
		);
	});

	return (
		<div>
			<p>Friends</p>
			<div className="friends_box">
				<div className="friends_actions">
					<Button onClick={props.openModal}>Select Friend</Button>
					<Button onClick={props.newFriend}>New Friend</Button>
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
