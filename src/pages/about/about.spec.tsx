import * as React from 'react';
import * as renderer from "react-test-renderer"
import About from './index';

describe("About", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<About />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
