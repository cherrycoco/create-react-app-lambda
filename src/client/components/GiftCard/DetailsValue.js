import React from 'react';
import Divider from '@material-ui/core/Divider';
import { InputLabel } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Payment from './Payment';

const styles = {
  divider: {
    width: '90%',
    margin: '0 auto',
  }
}

class Details extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: 'gc',
      name: null,
      message: null,
      price: 50,
    };
  }

  _handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // _handleAddToCart = (e) => {
  //   e.preventDefault();
  //   let data = {
  //     method: 'POST', 
  //     body: JSON.stringify(this.state),
  //     headers: new Headers()
  //   }

  //   fetch('/.netlify/functions/addToCart', data)
  //   .then(response => response.json())
  //   .then(jsonResponse => {
  //     this.setState({
  //       name: null,
  //       message: null,
  //       quantity: 1
  //     });
  //     alert('your giftcard has successfully been added to cart!');
  //     this.props.history.push('/giftcard');
  //   })
  //   .catch(err => {
  //     let errTextNode = document.createTextNode('Your item was not added successfuly, please try again!');
  //     document.getElementsByClassName('details')[0].appendChild(errTextNode);
  //   })
  // }

  _handleBuyNow = (e) => {
    e.preventDefault();
    // let data = {
    //   method: 'POST', 
    //   body: JSON.stringify(this.state),
    //   headers: new Headers()
    // }

    // fetch('/.netlify/functions/buyNow', data)
    // .then(response => response.json())
    // .then(jsonResponse => {
    //   this.setState({
    //     name: null,
    //     message: null,
    //     quantity: 1
    //   });
    //   alert('your giftcard has successfully been added to cart!');
    //   this.props.history.push('/giftcard');
    // })
    // .catch(err => {
    //   let errTextNode = document.createTextNode('Your item was not added successfuly, please try again!');
    //   document.getElementsByClassName('details')[0].appendChild(errTextNode);
    // })
  }

  render () {
    return (
      <div className='details-wrapper'>
        <div className='details'>
          <h2>{this.props.title}</h2>
          <Divider style={styles.divider}/>
          <p>{this.props.description}</p>
          <h4>Delivery Options:</h4>
          <p>SEND BY PDF - the recipient(or you) will receive the gift certificate immediately via e-mail. You can print the PDF or simply show a digital verion of it on your phone to the front desk staff.</p>
          <Divider style={styles.divider}/>
          <h4>{`Give the gift of zen with a ${this.props.title}!`}</h4>
          <form name='gc-form' onSubmit={this._handleBuyNow} >
            <div className='gc-form-items'>
              <InputLabel className='gc-name'>Choose the Gift Card Value:</InputLabel>
              <input name='price' type='number' onChange={this._handleChange} value={this.state.price} />
            </div>
            <div className='gc-form-items'>
              <InputLabel className='gc-name'>Recipient's Name:</InputLabel>
              <input name='name' type="text" onChange={this._handleChange} />
            </div>
            <div className='gc-form-items'>
              <InputLabel className='gc-message'>Giftcard Message:</InputLabel>
              <textarea name='message' type="text" onChange={this._handleChange} />
            </div>
            <div className='gc-price-buy-wrapper'>
              <div className='gc-price'>${this.state.price}</div>
              <div className='gc-buy-button'>
                <Payment 
                  amount={this.state.price * 100}
                  description={this.props.title}
                  id={this.state.id}
                  name={this.state.name}
                  message={this.state.message}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Details);