import * as React from "react"
import { Helmet } from 'react-helmet';
import BaseLayout from '@components/BaseLayout';

export default () => (
  <BaseLayout>
    <Helmet>
      <title>About</title>
      <meta name="description" content="A page's description, usually one or two sentences."/>
    </Helmet>
    <h1>About</h1>
    <p>Add an about page</p>
  </BaseLayout>
)
