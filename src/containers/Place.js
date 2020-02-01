import React from 'react';
import { Head } from 'react-static';
import { useRouteData } from 'react-static';

export default () => {
    const { place } = useRouteData();
    return <div className="emp">
        <Head>

        </Head>
        <div>
            {place.name}
        </div>
    </div>
}