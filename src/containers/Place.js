import React from 'react';
import { Head } from 'react-static';
import { useRouteData } from 'react-static';
import { Link } from 'components/Router'
import Header from './Header';

export default () => {
    const { place } = useRouteData();
    return <div>
        <Head>
            <title>{place.name}</title>
            <meta name="keywords" content={place.tags} />
            <meta name="description" content={place.desc} />
        </Head>
        <Header />
        <div className="About">
            <div>
                <h1>{place.name}</h1>
                <div>We do serve in {place.name}. From <Link to="/weddings">weddings</Link> to <Link to="/corporate-events">corporate events</Link> to services like <Link to="/decor">decor</Link> &amp; bridal makeover. We do it all in {place.name}</div>
            </div>
        </div>
    </div>
}