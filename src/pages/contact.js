import React, { useState } from 'react';

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
        <div className="Contact">
            <div className="opt">
                <div>What kind of event? <span>*</span></div>
                {items.map(f => {
                    let props = {
                        key: f,
                        className: event === f ? 'actv' : '',
                        onMouseDown: () => setEvent(f),
                    }
                    return <div>
                        <button {...props}>{f}</button>
                    </div>
                })}
            </div>
            <div className="inp">Contact <span>*</span></div>
            <div className="inp">
                <input type="text" placeholder="Mobile no" />
            </div>
            <div className="inp">Comments</div>
            <div className="inp">
                <textarea placeholder="Any comments or ideas about your event?" rows="10"></textarea>
            </div>
            <div>
                <button className="cob">SUBMIT</button>
            </div>
        </div>
    )
}