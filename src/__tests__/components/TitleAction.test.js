import React from "react";
import { shallow } from "enzyme";
import TitleAction from "components/TitleAction.jsx";

const props = {
	title: "test",
	button: "button_test",
	action: jest.fn()
};

it("renders TitleAction", () => {
	const wrapper = shallow(<TitleAction {...props} />);

	expect(wrapper.find("div").hasClass("title")).toBe(true);
	expect(wrapper.find("h2").text()).toBe("test");

	expect(wrapper).toMatchSnapshot();
});
