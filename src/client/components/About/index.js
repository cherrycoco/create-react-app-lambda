import React from 'react';
import ScrollToTop from '../ScrollToTop';
import MainImg from '../MainBody/MainImg';
import ScrollAnimation from 'react-animate-on-scroll';
import img from '../../assets/spa-background9.jpg';
import '../../styles/About.css';

// class LambdaDemoHello extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { loading: false, msg: null };
//   }

//   handleClick = e => {
//     e.preventDefault();

//     this.setState({ loading: true });
//     fetch('/.netlify/functions/hello')
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

// class LambdaDemoBye extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { loading: false, msg: null };
//   }

//   handleClick = e => {
//     e.preventDefault();

//     this.setState({ loading: true });
//     fetch('/.netlify/functions/bye')
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

const About = () => (
  <div>
    <ScrollToTop />
    <MainImg 
      img={img}
      title='Story'
    />
    <ScrollAnimation animateIn="fadeInUp" animateOnce>
      <div id='about'>
        <div id='about-title'>
          <h1>OUR HISTORY</h1>
          <p>It all started with a dream to help you achieve your best health so that you can live a life full of happiness.</p>
          <p>Cindy and Stanley have been on a continuous journey for more than 10 years perfecting their respective treatment techniques.</p>
          <p>Cindy started her career as a nurse at the age of 23. Realizing she wanted a more hands-on approach to helping her patients, Cindy experimented with massage techniques. She developed her own set of massage techniques based on her medical and human anatomy knowledge.</p>
          <p>Stanley started his career as a mechanical engineer. Shortly, he realized his real passion lies in health and helping people achieve a state of health they are happy with.  He has since then switched his profession to Chinese Traditional Medicine and Acupuncture. Stanley has developed his specialty treatment infusing massage with Chinese herbs to treat all muscle, ligament, and joint problems.</p>
          <p>Cindy and Stanley wanted a place where they can use their passion to help their patients alleviate any ailments and together they founded Zen in 2013.</p>
        </div>
      </div>
    </ScrollAnimation>
  </div>
)

export default About;