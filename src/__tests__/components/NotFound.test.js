import React from "react";
import { shallow } from "enzyme";
import NotFound from "components/NotFound.jsx";

it("renders NotFound", () => {
	const not_found = shallow(<NotFound />);
	expect(not_found).toMatchSnapshot();
});
