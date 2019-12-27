import React from 'react';
import Image from '../containers/Image';
import { Head } from 'react-static';

let photos = [
    'birthday.jpg',
    'catering.jpg',
    'college.jpg',
    'corporate.jpg',
    'costume.jpg',
    'decoration.jpg',
    'event.jpeg',
    'lights.jpeg',
    'mandapa.jpg',
    'music.jpg',
    'wedding.jpg',
]

export default () => {
    return (
        <div className="Photos">
            <Head>
                <title>Photos</title>
            </Head>
            {[...Array(18).keys()].map(f => {
                let idx = f * 3;
                let max = photos.length - 1;
                return <div className="phr" key={f}>
                    <div className="phd"><Image src={photos[idx % max]} name="sample" /></div>
                    <div className="phd"><Image src={photos[(idx + 1) % max]} name="sample" /></div>
                    <div className="phd"><Image src={photos[(idx + 2) % max]} name="sample" /></div>
                </div>
            })}
        </div>
    )
}