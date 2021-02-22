import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const activeStyle = {
  color: '#ff9061',
}

const styles = {
  button: {
    background: '#808b7c',
    color: 'white',
  }
};

class Nav extends React.Component {
  render () {
    return (
      <div id='nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink activeStyle={activeStyle} to='/about'>About</NavLink>
        <NavLink activeStyle={activeStyle} to='/treatments'>Treatments</NavLink>
        <NavLink activeStyle={activeStyle} to='/rates'>Rates</NavLink>
        <NavLink activeStyle={activeStyle} to='/contact'>Contact</NavLink>
        <a href='https://zenwellness.janeapp.com/' target='_blank'>
          <Button variant="contained" style={styles.button}>Book Now</Button>
        </a>
        {/* <NavLink activeStyle={activeStyle} to='/giftcard'>Gift Card</NavLink> */}
      </div>
  )}
}

export default Nav;