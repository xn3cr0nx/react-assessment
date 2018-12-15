import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button.jsx";

import "css/titleAction.css"

const TitleAction = props => {
	return (
		<div className="title">
			<h2>{props.title}</h2>
			<Button onClick={props.action}>{props.button}</Button>
		</div>
	);
};

export default TitleAction;
