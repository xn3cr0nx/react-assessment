import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Header from "./Header";
// import Footer from "./Footer";
import 'css/layout.css';

const MainLayout = props => {
	const { classes, location } = props;

	return (
		<main>
			<Header location={location} />
			<div>
				<div>{React.cloneElement(props.children, { ...props, classes: {} })}</div>
			</div>
			{/* <Footer /> */}
		</main>
	);
};

MainLayout.propTypes = {};

export default withRouter(MainLayout);
