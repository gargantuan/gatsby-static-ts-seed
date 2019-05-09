import * as React from 'react';
import * as renderer from "react-test-renderer"
import Index from './index';

describe("Index", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Index />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
