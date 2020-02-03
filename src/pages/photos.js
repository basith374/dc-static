import React from 'react';
import Image from '../containers/Image';
import { Head } from 'react-static';
import { getEvents } from '../common';

export default () => {
    let photos = getEvents('photos');
    return (
        <div className="Photos">
            <Head>
                <title>Photos</title>
                <meta name="keywords" content="kalyana,mandapa,catering,service,provider,decoration,lights,music,stage,balloon,panthal,tent" />
                <meta name="description" content="" />
            </Head>
            <div className="phr">
                {[...Array(18).keys()].map(f => {
                    let max = photos.length - 1;
                    let photo = photos[f % max];
                    return <div className="phd" key={f}><Image src={photo.img} name={photo.tags} /></div>
                })}
            </div>
        </div>
    )
}