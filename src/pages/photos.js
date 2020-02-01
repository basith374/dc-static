import React from 'react';
import Image from '../containers/Image';
import { Head } from 'react-static';
import events from '../events.json'

let photos = Object.values(events);

export default () => {
    return (
        <div className="Photos">
            <Head>
                <title>Photos</title>
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