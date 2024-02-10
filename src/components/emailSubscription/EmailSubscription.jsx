
import {useState} from 'react';

import './EmailSubscription.scss';

const EmailSubscription = () => {

    const [email, setEmail] = useState('');

    const submitEmail = () => {
        alert(`${email} is submitted`);
        setEmail('');
    }

    return (
        <div className="email-subscription">
            <label className="email-subscription__label">
                Get Email Updates:
            </label>
            <input 
                className="email-subscription__input" 
                placeholder="Email Address"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <button 
                className="email-subscription__button"
                onClick={submitEmail}
            >
                Sign up
            </button>
        </div>
    )
}

export default EmailSubscription