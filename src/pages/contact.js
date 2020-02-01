import React, { useState } from 'react';
import { Head } from 'react-static';

let items = [
    'Birthday',
    'Wedding',
    'Corporate Event',
    'College Events',
    'Other functions',
]

export default () => {
    let [event, setEvent] = useState('');
    return (
        <form className="Contact" name="contact" action="/thank-you" method="POST" data-netlify="true">
            <Head>
                <title>Contact us</title>
                <meta name="keywords" content="kalyana,mandapa,catering,service,provider,decoration,lights,music,stage,balloon,panthal,tent" />
                <meta name="description" content="" />
            </Head>
            <div className="opt">
                <div>What kind of event? <span>*</span></div>
                {items.map(f => {
                    let props = {
                        key: f,
                        className: event === f ? 'actv' : '',
                        onMouseDown: () => setEvent(f),
                    }
                    return <div key={f}>
                        <button type="button" {...props}>{f}</button>
                    </div>
                })}
                <input type="hidden" name="event" value={event} />
                <input type="hidden" name="form-name" value="contact" />
            </div>
            <div className="inp">Contact <span>*</span></div>
            <div className="inp">
                <input type="text" placeholder="Mobile no" name="mobileno" />
            </div>
            <div className="inp">Name <span>*</span></div>
            <div className="inp">
                <input type="text" placeholder="Your name" name="name" />
            </div>
            <div className="inp">Comments</div>
            <div className="inp">
                <textarea name="comments" placeholder="Any comments or ideas about your event?" rows="10"></textarea>
            </div>
            <div className="inp">
                <div data-netlify-recaptcha="true"></div>
            </div>
            <div>
                <button className="cob" type="submit">SUBMIT</button>
            </div>
        </form>
    )
}