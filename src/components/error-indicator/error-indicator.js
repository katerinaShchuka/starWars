import React from 'react';
import './error-indicator.css';
// import icon './moon.jpg';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
        <img src="./moon.jpg" alt="error icon" />
            <span className="boom">BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    )
}

export default ErrorIndicator;