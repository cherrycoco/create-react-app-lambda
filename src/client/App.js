import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../store';
import Header from './components/Header/index';
import MainBody from './components/MainBody/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import TreatmentComponent from './components/Treatments/index';
import Rates from './components/Rates/index';
import Footer from './components/Footer/index';
import GiftCard from './components/GiftCard/index';
import Acupuncture from './components/Acupuncture/index';
import Massage from './components/Massage/index';
import FootReflexology from './components/FootReflexology/index';
import GiftCardDetail from './components/GiftCard/Details';
import GiftCardDetailValue from './components/GiftCard/DetailsValue';
import CheckoutSuccess from './components/GiftCard/CheckoutSuccess';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={MainBody} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/treatments" component={TreatmentComponent} />
            <Route path="/rates" component={Rates} />
            <Route path="/giftcard" component={GiftCard} />
            <Route path="/massage" component={Massage} />
            <Route path="/acupuncture" component={Acupuncture} />
            <Route path="/foot-reflexology" component={FootReflexology} />
            <Route path="/checkout-success" component={CheckoutSuccess} />
            <Route 
              path="/giftcard/massage" 
              render={()=> <GiftCardDetail 
                title='full body massage'
                services={[
                  {b50: 'Full Body Massage - 50 Minutes'}, 
                  {b60: 'Full Body Massage - 60 Minutes'},
                  {b75: 'Full Body Massage - 75 Minutes'}, 
                  {b90: 'Full Body Massage - 90 Minutes'},
                ]}
                prices={{
                  b50: 49, 
                  b60: 59,
                  b75: 74, 
                  b90: 89,
                }}
                description='A restorative full body Swedish or Deep Tissue massage that aids in releasing deeply held patterns of tension, removing toxins, relaxing, soothing and thereby encouraging muscles to operate at full capacity. The techniques used in this massage create a prolonged state of reduced muscular tension by applying deep muscle compression and cross fibre friction to increase blood and lymphatic flow.'
              />}
            />
            <Route 
              path="/giftcard/foot-reflexology" 
              render={()=> <GiftCardDetail 
                title='foot reflexology'
                services={[
                  {f50: 'Foot Reflexology - 50 Minutes'}, 
                  {f60: 'Foot Reflexology - 60 Minutes'},
                  {f75: 'Foot Reflexology - 75 Minutes'}, 
                  {f90: 'Foot Reflexology - 90 Minutes'},
                ]}
                prices={{
                  f50: 39, 
                  f60: 48,
                  f75: 58, 
                  f90: 70,
                }}
                description='Foot Reflexology is an ancient Chinese pressure point massage of the feet to target reflex zones that correspond to organs within the body. Reflexology stimulates energy meridians, which relax and promote a sense of balanced and reawakened energy.'
              />}
            />
            <Route 
              path="/giftcard/acupuncture" 
              render={()=> <GiftCardDetail 
                title='acupuncture'
                services={[
                  {aInit: 'Acupuncture - Initial Assessment & Treatment'}, 
                  {aSub: 'Acupuncture - Subsequent Treatment'}
                ]}
                prices={{
                  aInit: 105, 
                  aSub: 88,
                }}
                description='Acupuncture stimulates the release of endorphins – the body’s natural pain-relieving neurohormones – through the insertion of needles into specific anatomical points (acupuncture points) to encourage natural healing. At Zen, our acupuncture treatments are a combination treatment between the use of needles, acupressure massage, and topical 100% natural Chinese herbs to treat both your symptoms and the root cause of your problem.'
              />}
            />
            <Route 
              path="/giftcard/deluxe-combo" 
              render={()=> <GiftCardDetail 
                title='deluxe combo'
                services={[
                  {comboA: 'Combo A - 25 min of Foot Reflexology & 50 min of Full Body Massage'}, 
                  {comboB: 'Combo B - 50 min of Foot Reflexology & 50 min of Full Body Massage'},
                  {comboC: 'Combo C - 50 min of Foot Reflexology & 75 min of Full Body Massage'}, 
                  {comboD: 'Combo D - 50 min of Foot Reflexology & 90 min of Full Body Massage'},
                ]}
                prices={{
                  comboA: 68, 
                  comboB: 88,
                  comboC: 108, 
                  comboD: 128,
                }}
                description='For the perfect Zen experience, certain treatments can provide better results when taken in combination. The following deluxe Zen package have been chosen for this season, so why not treat yourself or a loved one and enjoy the pampering you deserve. Select and enjoy your treatment.'
              />}
            />
            <Route 
              path="/giftcard/value" 
              render={()=> <GiftCardDetailValue
                title='gift card'
                description='Please choose a custom value between $10 to $500 for a gift card.'
              />}
            />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
