import React from 'react'
import { Head } from 'react-static';
import { getPlaces } from '../common';
import { Link } from 'components/Router'

export default () => (
  <div className="About">
    <Head>
        <title>Areas served</title>
        <meta name="keywords" content="kalyana,mandapa,catering,food,biriyani,south,indian,decoration,lights,music,stage,balloon,panthal,tent,bridal,makeover" />
        <meta name="description" content="We are a professional service company here to help you plan &amp; undertake your public/private events." />
    </Head>
    <h1>Areas served</h1>
    <div className="plinks">
        {getPlaces().map((p, i) => {
            let slug = '/find/event-managers-in-' + p.name.toLowerCase().replace(/\s/, '-');
            return <Link to={slug} key={i}>{p.name}</Link>
        })}
    </div>
  </div>
)
