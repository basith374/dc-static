import React from 'react';
import { Head } from 'react-static';
import { useRouteData } from 'react-static';

export default () => {
    const { event } = useRouteData();
    return <div className="emp">
        <Head>

        </Head>
        <div>
            {event.name}
        </div>
    </div>
}