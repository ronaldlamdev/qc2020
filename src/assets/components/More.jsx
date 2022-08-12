import React from 'react'
import {FaSteam, FaTwitch, FaYoutube} from 'react-icons/fa'

const More = () => {
  return (
    <div className='w-full p-4'>
      <ul>
        <li>
          <FaSteam />
          <p>Steam Group</p>
        </li>
        <li>
          <FaTwitch />
          <p>Vanille's QC2020 VODs</p>
        </li>
        <li>
          <FaTwitch />
          <p>Steam Group</p>
        </li>
        <li>
          <FaSteam />
          <p>Steam Group</p>
        </li>
      </ul>
    </div>
  )
}

export default More