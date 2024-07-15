import React from 'react';
import './input.css';

function input({text,result}) {
  return (
    <div className='input-wrapper'>
      <div className='result'>
        <h2>{result}</h2>
      </div>
      <div className='text'>
        <h4>{text}</h4>
      </div>
    </div>
  )
}

export default input
