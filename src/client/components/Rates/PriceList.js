import React from 'react';
import '../../styles/PriceList.css';

const PriceList = () => (
  <div id='price-list'>
    <div id='price'>
      <div className='categories'>
        <h2>Acupuncture</h2>
        <div className='items'>
          <div className='item'>Initial Assessment & Treatment</div>
          <div className='price'>$105</div>
        </div>
        <div className='items'>
          <div className='item'>Subsequent Treatments</div>
          <div className='price'>$90</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Bio-Energy Healing</h2>
        <div className='items'>
          <div className='item'>60 Minutes</div>
          <div className='price'>$115</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Massage</h2>
        <br />
        <div className='items'>
          <div className='item'><b>Chair Massage</b></div>
          <div className='price'>$1.5 / min</div>
        </div>
        <br />
        <div className='items'>
          <div className='item'><b>Swedish / Deep Tissue Massage: </b></div>
        </div>
        <div className='items'>
          <div className='item'>50 min</div>
          <div className='price'>$58</div>
        </div>
        <div className='items'>
          <div className='item'>60 min</div>
          <div className='price'>$68</div>
        </div>
        <div className='items'>
          <div className='item'>75 min</div>
          <div className='price'>$86</div>
        </div>
        <div className='items'>
          <div className='item'>90 min</div>
          <div className='price'>$102</div>
        </div>
        <br />
        <div className='items'>
          <div className='item'><b>Shiatsu / Mother-To-Be Massage: </b></div>
        </div>
        <div className='items'>
          <div className='item'>50 min</div>
          <div className='price'>$68</div>
        </div>
        <div className='items'>
          <div className='item'>60 min</div>
          <div className='price'>$78</div>
        </div>
        <div className='items'>
          <div className='item'>75 min</div>
          <div className='price'>$98</div>
        </div>
        <div className='items'>
          <div className='item'>90 min</div>
          <div className='price'>$118</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Foot Reflexology</h2>
        <div className='items'>
          <div className='item'>50 min</div>
          <div className='price'>$48</div>
        </div>
        <div className='items'>
          <div className='item'>60 min</div>
          <div className='price'>$56</div>
        </div>
        <div className='items'>
          <div className='item'>75 min</div>
          <div className='price'>$72</div>
        </div>
        <div className='items'>
          <div className='item'>90 min</div>
          <div className='price'>$86</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Deluxe Combo A - 75 min</h2>
        <div className='items'>
          <div className='item'>50 min Deep Tissue Massage or Swedish Massage <b>&</b> 25 min Foot Reflexology</div>
          <div className='price'>$78</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Deluxe Combo B - 100 min</h2>
        <div className='items'>
          <div className='item'>50 min Deep Tissue Massage or Swedish Massage <b>&</b> 50 min Foot Reflexology</div>
          <div className='price'>$98</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Deluxe Combo C - 125 min</h2>
        <div className='items'>
          <div className='item'>75 min Deep Tissue Massage or Swedish Massage <b>&</b> 50 min Foot Reflexology</div>
          <div className='price'>$128</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Deluxe Combo D - 125 min</h2>
        <div className='items'>
          <div className='item'>90 min Deep Tissue Massage or Swedish Massage <b>&</b> 50 min Foot Reflexology</div>
          <div className='price'>$148</div>
        </div>
      </div>
    </div>
  </div>
)

export default PriceList;