import React from "React";
import ReactShallowRenderer from "react-test-renderer/shallow";

import Table from "../../components/Table";

const nPrimes = [2, 3, 5, 7, 11];

test("should render Table correctly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Table nPrimes={nPrimes} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
