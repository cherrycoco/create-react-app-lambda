import React from 'react';
import ScrollToTop from '../ScrollToTop';
import MainImg from '../MainBody/MainImg';
import img from '../../assets/dog-spa.jpg';
import massageImg from '../../assets/massage4.png';
import frImg from '../../assets/foot-reflexology3.png';
import acuImg from '../../assets/acupuncture3.png';
import sMassageImg from '../../assets/massage3.png';
import comboImg from '../../assets/couples-massage.png';
import valueImg from '../../assets/christmas.png';
import Card from './Card';
import '../../styles/Giftcard.css';


// class LambdaDemo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { loading: false, msg: null };
//   }

//   handleClick = e => {
//     let body = {
//       service: 'b50',
//       price: 20,
//       note: 'hello'
//     };

//     e.preventDefault();
//     let data = {
//       method: 'POST', 
//       body: JSON.stringify(body),
//       headers: new Headers()
//     }

//     this.setState({ loading: true });
//     fetch('/.netlify/functions/hello', data)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }));
//   };

//   render() {
//     const { loading, msg } = this.state;

//     return (
//       <p>
//         <button onClick={this.handleClick}>
//           {loading ? 'Loading...' : 'Call Lambda'}
//         </button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     );
//   }
// }

const GiftCard = () => (
  <div>
    <ScrollToTop />
    <MainImg 
      img={img}
      title='Give the gift of relaxation'
    />
    <div id='gift-cards'>
      <Card 
        img={valueImg}
        title='CUSTOME VALUE GIFTCARD'
        link='value'
      />
      <Card 
        img={comboImg}
        title='DELUXE COMBO'
        link='deluxe-combo'
      />
      <Card 
        img={massageImg}
        title='FULL BODY MASSAGE'
        link='massage'
      />
      <Card 
        img={sMassageImg}
        title='SPECIALTY BODY MASSAGE'
        link='specialty-massage'
      />
      <Card 
        img={acuImg}
        title='ACUPUNCTURE'
        link='acupuncture'
      />
      <Card 
        img={frImg}
        title='FOOT REFLEXOLOGY'
        link='foot-reflexology'
      />
    </div>
  </div>
)

export default GiftCard;