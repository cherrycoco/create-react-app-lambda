import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { withRouter } from 'react-router-dom';


class Checkout extends React.Component {
  onToken = (token) => {
    let newToken = {
      ...token,
      'gift-name': this.props.name,
      'gift-message': this.props.message,
      'gift-id': this.props.id
    }
    fetch('/.netlify/functions/addToCart', {
      method: 'POST',
      body: JSON.stringify(newToken),
    }).then(response => {
      response.json().then(data => {
      alert(`We are in business, ${data.email}`);
      this.props.history.push('/checkout-success');
      });
    });
  }

  render() {
    return (
      <StripeCheckout
        amount={this.props.amount}
        billingAddress
        description={this.props.description}
        image="https://i.ytimg.com/vi/v8Kc0Ad3-JE/maxresdefault.jpg"
        locale="auto"
        name="ZEN WELLNESS CENTER"
        stripeKey="pk_test_2ZvN70yicDauFJKLNphVlMwW"
        currency="CAD"
        token={this.onToken}
        zipCode
        lable="Buy Now!"
      />
    )
  }
}

export default withRouter(Checkout);