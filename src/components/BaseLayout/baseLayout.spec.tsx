import * as React from 'react';
import * as renderer from "react-test-renderer"
import BaseLayout from './index';

describe("Contact", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<BaseLayout />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
});
