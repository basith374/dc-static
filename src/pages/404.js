import React from 'react'
import { Head } from 'react-static';
import Header from '../containers/Header';

export default () => (
  <div>
    <Head>
      <title>Page not found</title>
    </Head>
    <Header />
    <div className="About">
      <h1>404 - We couldn't find that page :(</h1>
    </div>
  </div>
)
