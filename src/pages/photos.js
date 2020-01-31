import React from 'react';
import Image from '../containers/Image';
import { Head } from 'react-static';

let photos = [
    ['birthday.jpg', 'birthday event organisers thalassery'],
    ['catering.jpg', 'catering & food payyannur'],
    ['college.jpg', 'college events taliparamba'],
    ['corporate.jpg', 'corporate event managers kannur'],
    ['costume.jpg', 'costume rental payyannur'],
    ['decoration.jpg', 'function decoration experts'],
    ['event.jpeg', 'event management'],
    ['lights.jpeg', 'lights & stage setup kannur'],
    ['mandapa.jpg', 'kalyana mandapa setup payyannur'],
    ['music.jpg', 'music & dj hire thalassery'],
    ['wedding.jpg', 'wedding organizer payyannur'],
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
                    let photo = photos[f % max];
                    return <div className="phd" key={f}><Image src={photo[0]} name={photo[1]} /></div>
                })}
            </div>
        </div>
    )
}