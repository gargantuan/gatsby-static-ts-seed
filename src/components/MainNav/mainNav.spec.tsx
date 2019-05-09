import * as React from 'react';
import * as renderer from "react-test-renderer"
import MainNav from './index';

describe("Contact", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<MainNav />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
});
