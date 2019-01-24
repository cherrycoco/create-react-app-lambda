import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';


const RateComponent = (props) => (
  <ScrollAnimation animateIn="fadeInUp" animateOnce>
    <div className='card'>
      <img src={props.img} alt={props.alt} />
      <h3>{props.title}</h3>
      <Link to={`/giftcard/${props.link}`}><button>Details</button></Link>
    </div>
  </ScrollAnimation>
)

export default RateComponent;