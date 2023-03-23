import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import ln from '../assets/logo-ln.svg';

function footer() {
  return (
    <footer>
      <div className="footer__grid">
        <div className="footer__navigation footer__grid--nav">
          <NavLink to="/aboutus" className="info__title">
            Shajar LLC
          </NavLink>
          <br />
          <NavLink to="/aboutus">About us</NavLink>
          {'  ∙  '}
          <NavLink to="/services">Services</NavLink> {'  ∙  '}
          <NavLink to="/contact">Contact</NavLink> {'  ∙  '}
          <NavLink to="/services">Terms & conditons</NavLink> {'  ∙  '}
          <NavLink to="/contact">Privacy policy</NavLink> {'  ∙  '}
        </div>

        <div className="info footer__grid--contact">
          <h4 className="info__title">Contact us</h4>
          <a href="+5493416740084" target="_blank" rel="noreferrer">
            <p>Tel: +54 9 341 674 0084</p>
          </a>
          <a href="mailto:shajarllc@gmail.com" target="_blank" rel="noreferrer">
            <p>shajarllc@gmail.com</p>
          </a>
        </div>
        <div className="info footer__grid--office">
          <h4 className="info__title"> Office</h4>

          <p>
            Corrientes 1624, o.1, Rosario,
            <br /> Santa Fe, Argentina
          </p>
        </div>

        <h2 className="footer__title footer__grid--title">
          <Link to="/" className="logo">
            Shajar LLC
          </Link>
          <br />
          Let&apos;s work together!{' '}
        </h2>
      </div>
    </footer>
  );
}

export default footer;
