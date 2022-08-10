import React from 'react'
import { standings } from '../data/Standings'

const Standings = () => {
  return (
    <div name="standings" className='py-10 px-4'>
      <h1 className='text-center text-yellow-200 text-3xl py-12'>Standings</h1>
      <div className='grid max-w-[1440px] mx-auto p-4 gap-6 grid-cols-1 lg:grid-cols-3 bg-black/20 rounded-md'>
      {standings.map((team, index) => (
        <div className='flex items-center gap-8 p-4 pl-9 bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 rounded-md' key={index}>
          <img className='w-[80px]' src={team.medal} />
          <div>
            <h2 className='text-gray-100 text-2xl'>{team.name}</h2>
            <p className='text-gray-300'>{team.win_loss}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Standings