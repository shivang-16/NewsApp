import React, { Component } from 'react'
import loading from './loading.gif'
export default class Spin extends Component {
  render() {
    return (
        <div className='text-center my-3'>
      <img src={loading} alt="" style={{height: '30px', width: '40px'}}/>
      </div>
    )
  }
}
