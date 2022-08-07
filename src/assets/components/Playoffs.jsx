import React from 'react'
import { useState } from 'react';
import { playoffs } from '../data/PlayoffsRounds';

const Playoffs = () => {

  const [games2, setPlayoffGames] = useState(playoffs);

  // Filter swiss games by round
  const filterRound = (roundNumber) => {
    setPlayoffGames(
      playoffs.filter((game) => {
        return game.round === roundNumber;
      })
    );
  };

  return (
    <div name="playoffs">
      {/* Button filter by Playoff Rounds */}
      <div className='max-w-[1640px]'>
        <h2 className='text-center mt-20 mb-5 text-[#FFF56D] font-semibold text-2xl'>Playoffs</h2>
        <div className='flex flex-wrap gap-1 justify-around max-w-[1440px] p-4 mx-auto'>
          <button onClick={() => setPlayoffGames(playoffs)} className='bg-[#2EB086] px-7 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#8A39E1] border border-white duration-300 tracking-wider'>All</button>
          <button onClick={() => filterRound(1)} className='bg-[#2EB086] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#8A39E1] border border-white duration-300'>Round 1</button>
          <button onClick={() => filterRound(2)} className='bg-[#2EB086] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#8A39E1] border border-white duration-300'>Round 2</button>
          <button onClick={() => filterRound(3)} className='bg-[#2EB086] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#8A39E1] border border-white duration-300'>Round 3</button>
          <button onClick={() => filterRound(4)} className='bg-[#2EB086] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#8A39E1] border border-white duration-300'>Round 4</button>
          <button onClick={() => filterRound('Semifinal')} className='bg-[#2EB086] px-2 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#8A39E1] border border-white duration-300'>Semifinal</button>
          <button onClick={() => filterRound('Final')} className='bg-[#2EB086] px-5 py-3 rounded-2xl text-white hover:bg-transparent hover:text-[#8A39E1] border border-white duration-300'>Final</button>
        </div>
      </div>

      {/* Playoffs Stage Matches */}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10'>
        {games2.map((game, index) => (
          <div className='flex justify-center flex-col' key={index}>
            <iframe className='w-full h-[300px] rounded-md mb-2' src={game.video}></iframe>
            <div className="flex justify-center bg-black/30 border border-white rounded-lg">
              <p className='text-white text-center py-4'><span className='text-[#72FFFF] font-bold'>{game.team1}</span> vs. <span className='text-red-600 font-bold'>{game.team2}</span> <span className='text-gray-300'>{game.part}</span></p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Playoffs