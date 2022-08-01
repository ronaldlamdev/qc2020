import React from 'react'
import { swiss }from '../data/SwissRounds';

const Matches = () => {
  return (
    <div id='matches' className='max-w-[1440px] m-auto px-4 py-16'>
      <h1 className='text-[#FFF9D7] text-3xl text-center font-bold'>Matches</h1>

      {/* Filter by Round */}
      <div>
        <h2 className='text-center mt-20 mb-5 text-[#D61C4E] font-semibold text-2xl'>Swiss Stage</h2>
        <div className='flex justify-evenly max-w-[1440px] p-4'>
          <button className='bg-[#1F4690] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#5E5DF0] border border-white duration-300'>Round 1</button>
          <button className='bg-[#1F4690] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#5E5DF0] border border-white duration-300'>Round 2</button>
          <button className='bg-[#1F4690] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#5E5DF0] border border-white duration-300'>Round 3</button>
          <button className='bg-[#1F4690] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#5E5DF0] border border-white duration-300'>Round 4</button>
          <button className='bg-[#1F4690] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#5E5DF0] border border-white duration-300'>Round 5</button>
          <button className='bg-[#1F4690] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#5E5DF0] border border-white duration-300'>Round 6</button>
        </div>
      </div>
    </div>
  )
}

export default Matches