import { Button } from '@material-ui/core';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const styles = {
  button: {
    background: '#808b7c',
    color: 'white',
  }
};

const BookBox = () => (
  <div className='book-box-wrapper'>
    <ScrollAnimation
      animateIn="slideInUp"
      animateOnce
    >
      <div className='book-box'>
        <h3>TO BOOK, OR FOR MORE INFORMATION, PLEASE CONTACT</h3>
        <a href='https://zenwellness.janeapp.com/' target='_blank'>
          <Button variant="contained" style={styles.button}>Book Online</Button>
        </a>
        <div className='book-box-contact'>
          <i className="material-icons md-18 md-gray">call</i>
          <a href="tel:604-428-0896">(604) 428-0896</a>
        </div>
      </div>
    </ScrollAnimation>
  </div>
)

export default BookBox;