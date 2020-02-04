import React from 'react';
import { Head } from 'react-static';
import { useRouteData } from 'react-static';
import { Link } from 'components/Router'
import Header from './Header';

export default () => {
    const { event } = useRouteData();
    return <div>
        <Head>
            <title>{event.name}</title>
            <meta name="keywords" content={event.tags} />
            <meta name="description" content={event.desc} />
        </Head>
        <Header />
        <div className="About">
            <div>
                <h1>{event.name}</h1>
                <div>One of the things we do is {event.name}. From around Kannur to the places near and around the edge of <Link to="/find/event-managers-in-kannur">Kannur</Link>, <Link to="/find/event-managers-in-payyanur">Payyanur</Link>, <Link to="/find/event-managers-in-kanhangad">Kanhangad</Link>, <Link to="/find/event-managers-in-kasargod">Kasargod</Link> to the farthest ends of Kerala. We do indeed do {event.name}</div>
            </div>
        </div>
    </div>
}