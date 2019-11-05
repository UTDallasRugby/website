import React from 'react';
import InstagramFeed from './InstagramFeed';
import './Footer.css';

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us on:{' '}
      <span>
        <h5>Twitter</h5>
        <a href="https://twitter.com/utdrugby">@UTDRugby</a>
      </span>
      <span>
        <h5>Instagram</h5>
        <a href="https://instagram.com/utd_rugby">@UTD_Rugby</a>
      </span>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
);
