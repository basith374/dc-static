import React, { useState } from 'react';
import { Head } from 'react-static';
import axios from 'axios';
import _ from 'lodash';
import Header from '../containers/Header';

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
    let [busy, setBusy] = useState(false);
    let onSubmit = e => {
        e.preventDefault();
        if(busy) return;
        let captcha = grecaptcha.getResponse();
        let invalid = {};
        let name = document.querySelector('[name=name]').value;
        let mobileno = document.querySelector('[name=mobileno]').value;
        let comments = document.querySelector('[name=comments]').value;
        if(!name) invalid['name'] = true;
        if(!event) invalid['event'] = true;
        if(!mobileno) invalid['mobileno'] = true;
        if(!captcha) invalid['captcha'] = true;
        if(Object.keys(invalid).length) return setErr(invalid);
        setBusy(true);
        axios.post('https://922p817owk.execute-api.ap-south-1.amazonaws.com/default/testing', {
            event,
            name,
            mobileno,
            comments,
            captcha,
        }).then(rsp => {
            window.location.replace('/thank-you');
        });
    }
    return (
        <div>
            <Head>
                <title>Contact us</title>
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                <meta name="keywords" content="kalyana,mandapa,catering,service,provider,decoration,lights,music,stage,balloon,panthal,tent" />
                <meta name="description" content="" />
            </Head>
            <Header />
            <div className="Contact">
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
                    <input type="number" placeholder="Mobile no" name="mobileno" />
                </div>
                <div className={'inp' + ('name' in err ? ' err' : '')}>Name <span>*</span></div>
                <div className="inp">
                    <input type="text" placeholder="Your name" name="name" />
                </div>
                <div className="inp">Comments</div>
                <div className="inp">
                    <textarea name="comments" placeholder="Any comments or ideas about your event?" rows="10"></textarea>
                </div>
                {'captcha' in err && <div className="inp err">Check the box below</div>}
                <div className="inp">
                    <div className="g-recaptcha" data-sitekey="6Ldw4dQUAAAAAKHCuT4pMmrOONMNnCn2JKQ8eCoG"></div>
                </div>
                <div>
                    <button className={'cob' + (busy ? ' disable' : '')} onClick={onSubmit}>SUBMIT</button>
                </div>
                <div className="c-f">
                    I understand that this form collects my name &amp; my phone number so that I can be contacted. For more information, please check out our <a href="/privacy-policy">privacy policy</a>
                </div>
            </div>
        </div>
    )
}