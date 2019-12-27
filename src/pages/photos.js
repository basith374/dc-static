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
            <div className="phr">
                {[...Array(18).keys()].map(f => {
                    let max = photos.length - 1;
                    return <div className="phd" key={f}><Image src={photos[f % max]} name="sample" /></div>
                })}
            </div>
        </div>
    )
}