import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BookNow.css';

const BookButton = (props) => (
  <div className='book-button'>
      <a href='https://zenwellness.janeapp.com/' target='_blank'>
        <button>{props.title}</button>
      </a>
  </div>
)

export default BookButton;