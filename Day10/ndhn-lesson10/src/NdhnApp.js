import React from 'react';
import NdhnUseState from './components/NdhnUseState';
import NdhnUseEffect from './components/NdhnUseEffect';

export default function NdhnApp() {
  return(
    <div className='container border my-2'>
      <h1>Demo React hook</h1>
      < NdhnUseState />
      < NdhnUseEffect />
    </div>
  )
}