import React, { Component } from 'react';
import NdhnLoginControl from './components/NdhnLoginControl';
import NdhnRenderList from './components/NdhnRenderList';
import NdhnRenderListStudent from './components/NdhnRenderListStudent';

class NdhnApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
        <h1 className='text-center'>Nguyễn Đỗ Hiền Nam - Render condition. List key</h1>
        <hr/>
        <NdhnLoginControl />

        <NdhnRenderList />

        <NdhnRenderListStudent />
      </div>
    );
  }
}

export default NdhnApp;