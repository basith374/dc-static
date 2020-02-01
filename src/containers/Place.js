import React from 'react';
import { Head } from 'react-static';
import { useRouteData } from 'react-static';

export default () => {
    const { place } = useRouteData();
    return <div className="emp">
        <Head>
            <title>{place.name}</title>
            <meta name="keywords" content={place.tags} />
            <meta name="description" content={place.desc} />
        </Head>
        <div>
            {place.name}
        </div>
    </div>
}