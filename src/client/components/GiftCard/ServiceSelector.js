import React from 'react';

const ServiceSelector = (props) => (
  <div className='service-selector'>
    <select onChange={props._handleSelect} name='service'>
      {props.services.map((service, index) => {
        let key = Object.keys(service)[0];
        return <option key={key} value={key}>{service[key]}</option>
      })}
    </select>
  </div>
)

export default ServiceSelector;