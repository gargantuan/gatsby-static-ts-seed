import * as React from 'react';
import * as renderer from "react-test-renderer"
import Privacy from './index';

describe("Index", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Privacy />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
