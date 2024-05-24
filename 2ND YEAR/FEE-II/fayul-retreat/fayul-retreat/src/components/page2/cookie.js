import React, { useState } from 'react';
import '../../css/booknow.css';

const Cookie = () => {
  const [showCookies, setShowCookies] = useState(true);

  const acceptCookies = () => {
    setShowCookies(false);
  };

  return (
    <>
      {showCookies && (
        <div className="card text-center" id="contentToHide">
          <div className="card-body">
            <p className="card-text">We use cookies to give you a better experience on our website.</p>
            <button id="agreeButton" className="btn btn-primary" onClick={acceptCookies}>I Agree</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookie;
