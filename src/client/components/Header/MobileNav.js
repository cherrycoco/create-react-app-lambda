import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { createMuiTheme } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/zen-logo.png';

const styles = {
  divider: {
    width: '90%',
    margin: '0 auto',
  },
  button: {
    background: '#808b7c',
    color: 'white',
    margin: '20px',
  }
}

class MobileNav extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div id='nav-side-list'>
        <div id='nav-side-list-logo'>
          <NavLink to='/'><img height="80" width="140" src={logo} /></NavLink>
        </div>
        <Divider style={styles.divider} />
        <List>
          {['home', 'about', 'rates', 'contact'].map((text, index) => {
            if (index === 0) {
              return (
                  <NavLink key={text} to={`/`}>
                    <ListItem button>{text}</ListItem>
                  </NavLink>
              )
            }
            return (
              <NavLink to={`/${text}`} key={text}>
                <ListItem button>{text}</ListItem>
              </NavLink>
            )
          })}
        </List>
        <Divider style={styles.divider}/>
        <a href='https://zenwellness.janeapp.com/' target='_blank'>
          <Button variant="contained" style={styles.button}>Book Now</Button>
        </a>
        {/* <div id='reservation'>
          <h4>Reservations</h4>
          <a href="tel:604-428-0896">(604) 428 - 0896</a>
        </div> */}
      </div>
    );

    return (
      <div id='mobile-nav'>
        <Button onClick={this.toggleDrawer('right', true)}>
          <i className="material-icons">menu</i>
        </Button>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default MobileNav;