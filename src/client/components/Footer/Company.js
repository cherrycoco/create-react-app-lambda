import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => (
  <div className='footer-block' id="company">
    <h2>COMPANY</h2>
    <Link to='/about'>About</Link>
    <Link to='/massage'>Massage</Link>
    <Link to='/acupuncture'>Acupuncture</Link>
    <Link to='/foot-reflexology'>Foot Reflexology</Link>
    <Link to='/rates'>Rates</Link>
    <Link to='/contact'>Contact</Link>
  </div>
)

export default Company;