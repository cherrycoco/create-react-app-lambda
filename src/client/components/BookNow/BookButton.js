import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BookNow.css';

const styles = {
  button: {
    background: '#808b7c',
    color: 'white',
  }
};

const BookButton = (props) => (
  <div className='book-button'>
      <a href='https://zenwellness.janeapp.com/' target='_blank'>
        <Button variant="contained" style={styles.button}>{props.title}</Button>
      </a>
  </div>
)

export default BookButton;