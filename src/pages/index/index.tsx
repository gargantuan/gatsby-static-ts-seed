import * as React from "react"
import { Helmet } from "react-helmet";
import BaseLayout from '@components/BaseLayout';

export default () => (
  <BaseLayout>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="A page's description, usually one or two sentences."/>
    </Helmet>
    <h2>This is the homepage</h2>
    <p>
      You're good to go. Start adding content.
    </p>
  </BaseLayout>
);
