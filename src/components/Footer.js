import React from 'react';
import InstagramFeed from './InstagramFeed';
import './Footer.css';

export default () => (
  <div>
    <div className="footer_inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/pages/category/School-Sports-Team/UT-Dallas-Rugby-Football-Club-211299435603865/"
            class="icon alt fa-facebook"
            target="_blank"
          >
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/utd_rugby/"
            class="icon alt fa-instagram"
            target="_blank"
          >
            <span class="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/utdrugby"
            class="icon alt fa-twitter"
            target="_blank"
          >
            <span class="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/UTDallasRugby/"
            class="icon alt fa-github"
            target="_blank"
          >
            <span class="label">GitHub</span>
          </a>
        </li>
      </ul>
    </div>

    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Crafted by the UTD Men's Rugby
          Tech Staff.
        </span>
      </div>
    </footer>
  </div>
);
