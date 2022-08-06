import React from 'react'
import Swiss from './Swiss'
import Playoffs from './Playoffs'

const Matches = () => {

  return (
    <div id='matches' className='max-w-[1440px] m-auto px-4 py-16'>
      <h1 className='text-[#FFF9D7] text-3xl text-center font-bold'>Matches</h1>
      <Swiss />
      <Playoffs />
    </div>
  )
}

export default Matches