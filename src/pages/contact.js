import React, { useState } from 'react';
import { Head } from 'react-static';
import axios from 'axios';
import _ from 'lodash';

let items = [
    'Birthday',
    'Wedding',
    'Corporate Event',
    'College Events',
    'Other functions',
]

export default () => {
    let [event, setEvent] = useState('');
    let [err, setErr] = useState({});
    let onSubmit = e => {
        e.preventDefault();
        let captcha = grecaptcha.getResponse();
        let invalid = {};
        let name = document.querySelector('[name=name]').value;
        let mobileno = document.querySelector('[name=mobileno]').value;
        let comments = document.querySelector('[name=comments]').value;
        if(!name) invalid['name'] = true;
        if(!event) invalid['event'] = true;
        if(!mobileno) invalid['mobileno'] = true;
        // if(!captcha) invalid['captcha'] = true;
        if(Object.keys(invalid).length) return setErr(invalid);
        axios.post('https://57x5v1zxqh.execute-api.ap-south-1.amazonaws.com/default/dcContact', {
            event,
            name,
            mobileno,
            comments,
            captcha,
            id: new Date().toString()
        }).then(rsp => {
            console.log(rsp.data)
            // window.location.replace('/thank-you');
        });
    }
    return (
        <form className="Contact" action="/thank-you" method="POST" onSubmit={onSubmit}>
            <Head>
                <title>Contact us</title>
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                <meta name="keywords" content="kalyana,mandapa,catering,service,provider,decoration,lights,music,stage,balloon,panthal,tent" />
                <meta name="description" content="" />
            </Head>
            <div className="opt">
                <div className={'event' in err ? 'err' : ''}>What kind of event? <span>*</span><span className="err"></span></div>
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
            </div>
            <div className={'inp' + ('mobileno' in err ? ' err' : '')}>Contact <span>*</span></div>
            <div className="inp">
                <input type="text" placeholder="Mobile no" name="mobileno" />
            </div>
            <div className={'inp' + ('name' in err ? ' err' : '')}>Name <span>*</span></div>
            <div className="inp">
                <input type="text" placeholder="Your name" name="name" />
            </div>
            <div className="inp">Comments</div>
            <div className="inp">
                <textarea name="comments" placeholder="Any comments or ideas about your event?" rows="10"></textarea>
            </div>
            {'captcha' in err && <div className="inp err">Captcha error</div>}
            <div className="inp">
                <div className="g-recaptcha" data-sitekey="6Ldw4dQUAAAAAKHCuT4pMmrOONMNnCn2JKQ8eCoG"></div>
            </div>
            <div>
                <button className="cob" type="submit">SUBMIT</button>
            </div>
        </form>
    )
}