import React from 'react'

const Highlights = () => {

  return (
    <div name="highlights" className='p-4'>
      <div className='max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 py-20 gap-8 lg:gap-0'>
        <div className='flex justify-center items-center text-center'>
          <h1 className='text-3xl text-[#F9F9C5]'>Quarantine Cup 2020 Frag Video</h1>
        </div>
        <div>
          <iframe className='rounded-md w-full h-[360px]' src="https://www.youtube.com/embed/cuOSw73IK6g"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Highlights