import React from 'react';
import { Link } from 'react-router-dom';

const ServiceComponent = (props) => (
  <Link to={props.link}>
  <div 
    className='mainBody-serviceComponent' 
    style={{backgroundImage: 
      `linear-gradient(
        rgba(0, 0, 0, 0.3), 
        rgba(0, 0, 0, 0.3)),
        url(${props.img})`
      }}>
    <div className='mainBody-serviceComponent-title'>
      <h1>{props.title}</h1>
    </div>
    <div className='mainBody-serviceComponent-readMore'>
      <h2>LEARN MORE</h2>
    </div>
  </div>
  </Link>
);

export default ServiceComponent;