import * as React from "react"
import { Helmet } from "react-helmet";
import BaseLayout from '@components/BaseLayout';

export default () => (
  <BaseLayout>
    <Helmet>
      <title>Contact</title>
      <meta name="description" content="A page's description, usually one or two sentences."/>
    </Helmet>
    <h1>Contact</h1>
    <p>Contact goes here...</p>
  </BaseLayout>
)
