import * as React from "react"
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import MainNav from '@components/MainNav';


export const BaseLayout: React.SFC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <>
      <Helmet titleTemplate="New Site - %s">
        <meta charSet="utf-8" />
      </Helmet>
      <h1><Link to="/">Website Title</Link></h1>
      <MainNav />
      {children}
      <footer>
          <p><Link to="/privacy" title="privacy policy">Privacy policy</Link></p>
      </footer>
    </>
  );
}

export default BaseLayout;

