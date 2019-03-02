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
          <div className='item'>Subsequent Treatments:</div>
        </div>
        <div className='items'>
          <div className='item'>30 Minutes</div>
          <div className='price'>$50</div>
        </div>
        <div className='items'>
          <div className='item'>60 Minutes</div>
          <div className='price'>$90</div>
        </div>
        <div className='items'>
          <div className='item'>75 Minutes</div>
          <div className='price'>$110</div>
        </div>
        <div className='items'>
          <div className='item'>90 Minutes</div>
          <div className='price'>$135</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Massage</h2>
        <div className='items'>
          <div className='item'><b>Chair Massage</b></div>
          <div className='price'>$1.5 / min</div>
        </div>
        <br />
        <div className='items'>
          <div className='item'><b>Swedish / Deep Tissue / Shiatsu Massage:</b></div>
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
          <div className='item'>Add Yü Herbs to any massage</div>
          <div className='price'>$10</div>
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
        <div className='items'>
          <div className='item'>*All sessions includes a foot soak and a complementary shoulder massage</div>
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

      <div className='categories'>
        <h2>Package Pricing</h2>
        <div className='items'>
          <div className='item'><b>Acupuncture</b></div>
        </div>
        <div className='items'>
          <div className='item'>10 Treatments - 60 Minutes (Value $900)</div>
          <div className='price'>$850</div>
        </div>
        <div className='items'>
          <div className='item'>10 Treatments - 75 Minutes (Value $1100)</div>
          <div className='price'>$1050</div>
        </div>
        <div className='items'>
          <div className='item'>10 Treatments - 90 Minutes (Value $1350)</div>
          <div className='price'>$1300</div>
        </div>
        <br />

        <div className='items'>
          <div className='item'><b>Swedish / Deep Tissue / Shiatsu Massage</b></div>
        </div>
        <div className='items'>
          <div className='item'>10 Treatments – 50 Minutes (Value $580)</div>
          <div className='price'>$520</div>
        </div>
        <div className='items'>
          <div className='item'>10 Treatments – 60 Minutes (Value $680)</div>
          <div className='price'>$610</div>
        </div>
        <div className='items'>
          <div className='item'>10 Treatments – 75 Minutes (Value $860)</div>
          <div className='price'>$770</div>
        </div>
        <div className='items'>
          <div className='item'>10 Treatments – 90 Minutes (Value $1020)</div>
          <div className='price'>$910</div>
        </div>
        <br />

        <div className='items'>
          <div className='item'><b>Foot Reflexology</b></div>
        </div>
        <div className='items'>
          <div className='item'>10 Treatments – 50 Minutes (Value $480)</div>
          <div className='price'>$430</div>
        </div>
        <div className='items'>
          <div className='item'>10 Treatments – 60 Minutes (Value $560)</div>
          <div className='price'>$500</div>
        </div>
        <div className='items'>
          <div className='item'>10 Treatments – 75 Minutes (Value $720)</div>
          <div className='price'>$650</div>
        </div>
        <div className='items'>
          <div className='item'>10 Treatments – 90 Minutes (Value $860)</div>
          <div className='price'>$770</div>
        </div>
      </div>
    </div>
  </div>
)

export default PriceList;