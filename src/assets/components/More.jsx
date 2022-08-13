import React from 'react'
import {FaSteam, FaTwitch, FaYoutube} from 'react-icons/fa'
import {FcRules} from 'react-icons/fc'
import {TbTournament} from 'react-icons/tb'

const More = () => {
  return (
    <div name="more" className='w-full p-4 flex flex-col items-start lg:flex-row md:justify-around h-[100px] mx-auto gap-4'>

      <a className='flex items-center justify-center md:justify-between gap-4 text-gray-300 hover:underline hover:underline-offset-2' href='https://steamcommunity.com/groups/QuarantineCup2020' target='_blank'>
        <FaSteam />
        <p>Steam Group</p>
      </a>

      <a className='flex items-center justify-center md:justify-between gap-4 text-gray-300 hover:underline hover:underline-offset-2' href='https://docs.google.com/document/d/16wV-cNj_G77dfzInD1vg86sUFC2R0Htx-EDwRv6mJR8/edit' target='_blank'>
        <FcRules />
        <p>Tournament Rules</p>
      </a>

      <a className='flex items-center justify-center md:justify-between gap-4 hover:underline hover:underline-offset-2 decoration-gray-300' href='https://challonge.com/d4vr5q5b' target='_blank'>
        <TbTournament className='text-[#EF5B0C]' />
        <p className='text-gray-300'>Double Elimination Brackets</p>
      </a>

      <a className='flex items-center justify-center md:justify-between gap-4 hover:underline hover:underline-offset-2 decoration-gray-300' href='https://www.twitch.tv/vanillezz/videos?filter=collections' target='_blank'>
        <FaTwitch className='text-[#6441A4]'/>
        <p className='text-gray-300'>Tournament VODs</p>
      </a>

      <a className='flex items-center justify-center md:justify-between gap-4 hover:underline hover:underline-offset-2 decoration-gray-300' href='https://www.youtube.com/channel/UCUSCF46JS7Z3Zsg4LLhSB_w/videos' target='_blank'>
        <FaYoutube className='text-[#FF0000]'/>
        <p className='text-gray-300'>YouTube Channel</p>
      </a>

    </div>
  )
}

export default More