import { Button } from '@material-ui/core';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import scrolldownIcon from '../../assets/scrolldownIcon.png';

const styles = {
  button: {
    background: '#808b7c',
    color: 'white',
    margin: 'auto',
  }
};

const MainImg = (props) => (
  <ScrollAnimation
    animatePreScroll
    animateIn="fadeInUp"
    animateOnce
  >
    <div 
      className='main-img' 
      style=
        {{backgroundImage: 
          `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)),
          url(${props.img})`
        }} 
    >
      <div className='main-img-body'>
        <h1>{`\u2014 ${props.title} \u2014`}</h1>
        <h2>{props.description}</h2>
        <a href='https://zenwellness.janeapp.com/' target='_blank'>
          <Button variant="contained" style={styles.button}>Book Now</Button>
        </a>
      </div>
      <img src={scrolldownIcon} />
    </div>
  </ScrollAnimation>
)

export default MainImg;

