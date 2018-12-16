import React, { Component } from "react";
import PropTypes from "prop-types";
import qs from "qs";
import isEqual from "lodash.isequal";
import Modal from "react-modal";
import { Notification } from "react-pnotify";
import TitleAction from "components/TitleAction.jsx";
import Button from "components/Button.jsx";
import ErrorButton from "components/ErrorButton.jsx";
import FriendsBox from "components/FriendsBox.jsx";
import { trigger3s } from "libs/lib.js";
import "css/users.css";

const modalStyles = {
	content: {
		display: "flex",
		flexDirection: "column",
		color: "black",
		width: "10vw",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)"
	}
};

Modal.setAppElement("#root");

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = this.getInitialState();
	}

	getInitialState() {
		return {
			type: "new",
			id: "",
			name: "",
			friends: [],
			modal: false,
			missingName: false,
			alreadyName: false,
			error: false
		};
	}

	handleName = e => {
		this.setState({ name: e.target.value });
	};

	saveUser = () => {
		if (!this.state.name) {
			trigger3s.call(this, "missingName");
			return;
		}
		if (this.props.users.list.filter(u => u.name === this.state.name)[0]) {
			trigger3s.call(this, "alreadyName");
			return;
		}
		this.setState({ error: false });
		this.props.createUser({ name: this.state.name, friends: this.state.friends });
	};

	updateUser = () => {
		if (
			(this.state.name && this.state.name != this.props.users.list.filter(user => user.id === this.state.id)[0].name) ||
			!isEqual(this.state.friends, this.props.users.list.filter(user => user.id === this.state.id)[0].friends)
		) {
			this.setState({ error: false });
			let user = {
				id: this.state.id,
				friends: this.state.friends
			};
			user.name = !this.state.name
				? this.props.users.list.filter(user => user.id == this.state.id)[0].name
				: this.state.name;
			this.props.updateUser(user);
		}
	};

	selectFriends = () => {
		let inputs = Array.from(document.getElementsByTagName("input"));
		inputs = inputs.filter(i => i.type === "checkbox" && i.checked);
		this.setState({ friends: [...this.state.friends, ...inputs.map(e => e.value)] }, () => {
			this.closeModal();
		});
	};

	removeFriend = e => {
		this.setState({ friends: this.state.friends.filter(f => f !== e.target.id) });
	};

	// from this point should start the mechanism to render stacked pages.
	// I would try to do it with Portals. It's an overhead for this test.
	// I already spent so much time on this.
	newFriend = () => {
		this.props.history.push("/user");
		this.setState(this.getInitialState());
	};

	openModal = () => {
		this.setState({ modal: true });
	};

	closeModal = () => {
		this.setState({ modal: false });
	};

	componentDidMount() {
		const values = qs.parse(this.props.location.search.slice(1));
		if (values.id) {
			let user = this.props.users.list.filter(user => user.id == values.id)[0];
			if (!user) {
				this.props.history.push("/");
				return;
			}
			this.setState({
				type: "edit",
				id: user.id,
				friends: user.friends ? user.friends : []
			});
		}
		this.props.resetFetching();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.users.fetchingSucc != this.props.users.fetchingSucc &&
			prevProps.users.list.length < this.props.users.list.length
		)
			this.props.history.push("/");
		if (prevProps.users.fetchingErr != this.props.users.fetchingErr) {
			this.setState({ error: true });
			this.props.resetFetching();
		}
	}

	handleKeyPress = e => {
		if (e.key == "Enter") {
			this.state.type === "new" ? this.saveUser() : this.updateUser();
		}
	};

	render() {
		const { users } = this.props;
		let user = users.list.filter(user => user.id == this.state.id)[0];
		let name = user ? user.name : null;

		let userFriends = users.list
			.filter(u => !this.state.friends.includes(u.name) && u.name !== name)
			.map(u => {
				return (
					<div key={u.name}>
						<input type="checkbox" name="checkbox" id={u.name} value={u.name} />
						<label htmlFor={u.name}>{u.name}</label>
					</div>
				);
			});

		const modal = (
			<Modal
				isOpen={this.state.modal}
				onRequestClose={this.closeModal}
				shouldCloseOnOverlayClick={true}
				style={modalStyles}>
				{userFriends}
				<Button onClick={this.selectFriends}>save</Button>
			</Modal>
		);

		const notifyError = (
			<Notification
				type="error"
				text={
					this.state.missingName
						? "You must insert a name"
						: this.state.error
						? "Something went wrong"
						: "An user with this name already exists"
				}
				animateIn="bounceInLeft"
				animateOut="bounceOutRight"
				delay={2500}
				shadow={true}
				hide={true}
				nonblock={false}
				desktop={true}
			/>
		);

		return (
			<div className="container" onKeyPress={this.handleKeyPress}>
				{modal}
				{(this.state.missingName || this.state.alreadyName || this.state.error) && notifyError}

				{this.state.type === "new" ? (
					<div>
						{this.state.error && <ErrorButton onClick={this.saveUser}>retry</ErrorButton>}
						<TitleAction title="new user" button="save" action={this.saveUser} />
						<div className="name">
							<label htmlFor="name">name</label>
							<input id="name" type="text" value={this.state.name} onChange={this.handleName} />
						</div>
						<FriendsBox
							friends={this.state.friends}
							removeFriend={this.removeFriend}
							newFriend={this.newFriend}
							openModal={this.openModal}
						/>
					</div>
				) : (
					<div>
						{this.state.error && <ErrorButton onClick={this.updateUser}>retry</ErrorButton>}
						<TitleAction title={name} button="save" action={this.updateUser} />
						<div className="name">
							<label htmlFor="name">name</label>
							<input id="name" type="text" value={this.state.name} onChange={this.handleName} />
						</div>
						<FriendsBox
							friends={this.state.friends}
							removeFriend={this.removeFriend}
							newFriend={this.newFriend}
							openModal={this.openModal}
						/>
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
