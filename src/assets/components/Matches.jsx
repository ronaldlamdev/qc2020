import React from 'react'
import { useState } from 'react';
import { swiss }from '../data/SwissRounds';

const Matches = () => {

  const [games, setGames] = useState(swiss);

  return (
    <div id='matches' className='max-w-[1440px] m-auto px-4 py-16'>
      <h1 className='text-[#FFF9D7] text-3xl text-center font-bold'>Matches</h1>

      {/* Filter by Round */}
      <div className='max-w-[1640px]'>
        <h2 className='text-center mt-20 mb-5 text-[#D61C4E] font-semibold text-2xl'>Swiss Stage</h2>
        <div className='flex flex-wrap gap-1 justify-around max-w-[1440px] p-4 mx-auto'>
          <button className='bg-[#1F4690] px-7 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#5E5DF0] border border-white duration-300 tracking-wider'>All</button>
          <button className='bg-[#1F4690] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#5E5DF0] border border-white duration-300'>Round 1</button>
          <button className='bg-[#1F4690] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#5E5DF0] border border-white duration-300'>Round 2</button>
          <button className='bg-[#1F4690] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#5E5DF0] border border-white duration-300'>Round 3</button>
          <button className='bg-[#1F4690] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#5E5DF0] border border-white duration-300'>Round 4</button>
          <button className='bg-[#1F4690] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#5E5DF0] border border-white duration-300'>Round 5</button>
          <button className='bg-[#1F4690] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#5E5DF0] border border-white duration-300'>Round 6</button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10'>
        {games.map((game, index) => (
          <div className='flex justify-center flex-col' key={index}>
            <iframe className='w-full h-[300px] rounded-md mb-2' src={game.video}></iframe>
            <div className="flex justify-center bg-black/30 border border-white rounded-lg">
              <p className='text-white py-4'><span className='text-[#72FFFF] font-bold'>{game.team1}</span> vs. <span className='text-red-600 font-bold'>{game.team2}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Matches