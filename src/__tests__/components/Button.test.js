import React from "react";
import { shallow } from "enzyme";
import Button from "components/Button.jsx";
import ErrorButton from "components/ErrorButton.jsx";

it("renders Button", () => {
	const button = shallow(<Button />);
	expect(button).toMatchSnapshot();
});

it("renders ErrorButton", () => {
	const error_button = shallow(<ErrorButton />);
	expect(error_button).toMatchSnapshot();
});
