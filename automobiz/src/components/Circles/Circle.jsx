import React from 'react'
import './circle.css';

const Circle = ({value,second_value,class_name}) => {
  return (
    <div className={`orange_circle ${class_name}` }>
        <div className='fs-18 fw-bold'>{value}</div>
        <div className='fs-12 '>{second_value}</div>
    </div>
  )
}

export default Circle