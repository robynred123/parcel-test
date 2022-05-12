import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";

const onClick = jest.fn();

it("renders the button component successfully", () => {
	const component = renderer.create(
		<Button className="button" children="button" onClick={onClick} />
	);
	let testJson = component.toJSON();
	renderer.act(() => testJson.props.onClick());
	expect(testJson).toMatchSnapshot();
	expect(onClick).toHaveBeenCalled();
});
