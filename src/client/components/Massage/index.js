import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import MainImg from '../MainBody/MainImg';
import mainImg from '../../assets/massage1.jpg';
import BookBox from '../BookNow/BookBox';
import ScrollToTop from '../ScrollToTop/index';
import '../../styles/Treatment.css';
import MassageCard from './MassageCard';

class Massage extends React.Component {
  componentDidMount () {
    document.addEventListener('scroll', this.floatBookBox);
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.floatBookBox);
  }

  floatBookBox = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;
    let y = 200 - (innerHeight - scrollTop);
    let x = y / 2;

    if (innerWidth > 859 && x > 0 && x < 80) {
      const bookBoxes = Array.from(document.getElementsByClassName('treatment-book-box'));
      bookBoxes.forEach(bookBox => {
        bookBox.style.transform = `translateY(-${x}px)`;
      });
    }
  }

  render = () => (
    <div className='treatment'>
      <ScrollToTop />
      <MainImg img={mainImg} title='Massage' />
      <ScrollAnimation 
        animateIn="slideInUp"
        animateOnce
      >
        <div className='treatment-description'>
          <h2>FULL BODY MASSAGE</h2>
          <p>
            Full body massage is our specialty. Our approach is clinical and outcome-based. Depending upon your needs, our massages include your choice of Swedish, Deep Tissue and Sports Medicinal, Shiatsu, and Prenatal Treatment.
          </p>
        </div>
      </ScrollAnimation>
      <div className='treatment-book-box'>
        <BookBox />
      </div>
      <div className='clearFloat'/>
      <div className='massage-cards'>
        <MassageCard 
          title='SWEDISH RELAXATION MASSAGE'
          description='This full body relaxation massage promotes good health by improving blood flow to the skin and relieves tension caused by stress. This technique uses long, gentle strokes with minimal pressure and is a good introduction to spa treatment.'
          price='$58'
        />
        <MassageCard 
          title='DEEP TISSUE MASSAGE'
          description='A restorative full body massage that aids in releasing deeply held patterns of tension, removing
            toxins, relaxing, soothing and thereby encouraging muscles to operate at full capacity. The
            techniques used in this massage create a prolonged state of reduced muscular tension by
            applying deep muscle compression and cross fibre friction to increase blood and lymphatic
            flow.'
          price='$58'
        />  
        <MassageCard 
          title='SPORTS MEDICINAL MASSAGE'
          description='Our sports medicinal massage is performed to targeted areas infused with our all natural traditional Chinese herbs, Yü, to speed up the healing process. Whether you are a professional athletes, amateur athletes, weekend warriors, or someone who is suffering from soft tissue injuries such as chronic muscle cramps, muscle strain, sprains, rotator cuff tears, tennis elbow, bursitis and shin splints - we have you covered.'
          price='$68'
        />
        <MassageCard 
          title='SHIATSU MASSAGE'
          description='Shiatsu is a Japanese acupressure massage that activates the body’s self-healing abilities. While the therapist’s fingers, palms, elbows and feet apply direct pressure to your body, your muscles are also stretched and your joints are gently rotated. Energizing, yet deeply relaxing.
          Since no massage oil is used in this treatment, Shiatsu can be performed through loose attire, on a massage table or comfortable floor cushion. We recommend Shiatsu if you often feel tightness and stiffness of joints or if you feel all "crunched up" or out of balance. Pressure and intensity can be customized from light to deep, depending on your needs.'
          price='$58'
        />
        <MassageCard 
          title='MOTHER TO BE MASSAGE'
          description='Give yourself a moment to appreciate the joys of motherhood and allow the stresses and tension to melt away with this specially designed prenatal treatment. 
          The massage will relieve and ease the heavy feeling that comes with pregnancy, alleviating an aching back. 
          Finally, end your treatment with a relaxing, rejuvenating scalp and facial massage. 
          This massage suitable for all stages of pregnancy after the first trimester - it is important to tell us how far along you are when reserving in order to ensure your comfort during the treatment.'
          price='$58'
        />
        <MassageCard 
          title='Yü – Topical Chinese Medicinal Herb'
          description='Yü is an all-natural, herb based medicinal cream first developed by the aboriginal Miao peoples
          of Southern China. While hunting, Miao tribesmen noticed injured animals often chewed and
          smeared a mixture of herbs and spread them across their wounded skin. This discovery led the
          Miao people to experiment with these herbs. Upon hundreds of years of refinement and clinical
          trial validation, the new herb mixture is created, Yü. Yü not only speed up healing time across
          numerous afflictions, but also reduced pain and decreased infection rates. Yü is made with 100% 
          purely natural herbs and does not contain synthetic medical ingredients. It has been used to treat 
          and cure over 100,000 people with the success rate of over 90%. Yü could be added to any treatments.'
          price='$10'
        />
      </div>
    </div>
  )
}

export default Massage;