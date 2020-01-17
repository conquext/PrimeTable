import React from "React";
import ReactShallowRenderer from "react-test-renderer/shallow";

import Row from "../../components/Row";
import { render } from "@testing-library/react";

const rList = [2, 3, 5, 7, 11];

test("should render Rows correctly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Row rList={rList} />);
  //   renderer.render({ component });
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
