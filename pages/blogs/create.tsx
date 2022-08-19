import React from 'react'
import Header from '../../components/layouts/Header'

export default function create_post() {
  return (
    <div className='p-2'>
      <Header/>
      <div className='row'>
        <div className='col-md-12'>
          <h4 className='heading text-center text-primary p-3'>Create Post</h4>
        </div>
      </div>
    </div>
  )
}
