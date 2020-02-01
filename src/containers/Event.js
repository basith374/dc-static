import React from 'react';
import { Head } from 'react-static';
import { useRouteData } from 'react-static';

export default () => {
    const { event } = useRouteData();
    return <div className="emp">
        <Head>
            <title>{event.name}</title>
            <meta name="keywords" content={event.tags} />
            <meta name="description" content={event.desc} />
        </Head>
        <div>
            {event.name}
        </div>
    </div>
}