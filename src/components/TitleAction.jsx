import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button.jsx";

const TitleAction = props => {
	return (
		<div className="title">
			<h2>{props.title}</h2>
			<Button>{props.button}</Button>
		</div>
	);
};

export default TitleAction;
