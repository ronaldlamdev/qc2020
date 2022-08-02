import React from 'react'

const About = () => {
  return (
    <section id='about' className='mt-16 mx-auto max-w-[350px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px] 2xl:max-w-[1440px]'>
      <div className='flex flex-col lg:flex-row justify-around gap-8 text-center'>
        <p className='text-white/80 bg-black/30 p-6 rounded-xl border-gray-100 border leading-7'>
          The <span className='text-[#FFF9D7] font-bold'>Quarantine Cup</span> of <span className='text-red-700 font-bold'>2020</span> is an international competitive Left 4 Dead 2 tournament 
          that kicked off in April 16, 2020 and concluded in August 21, 2020, with European Team <span className='font-semibold text-[#BD4291]'>Frag4</span> as the <span className='text-[#FFEF82]'>champions </span>
            and North American Team <span className='text-[#EFD345]'>LuckyGlock</span> as the <span className='text-[#A2B5BB]'>runner-up</span>.  
        </p>
        <p className='text-white/80 bg-black/30 p-6 rounded-xl border-gray-100 border leading-7'>
          The tournament was born out of the early periods of the global <span className='text-red-800 font-bold'>COVID</span> epidemic back in March 2020. Many Left 4 Dead players found themselves
          at home more frequently due to the nationwide sanctioned lockdown, therefore giving players more time to <span className='text-[#53BF9D]'>scrim</span> (a gaming term for practicing 
          competitive games). For this reason, it is how the <span className='text-[#FFF9D7] font-bold'>Quarantine Cup</span> of <span className='text-red-700 font-bold'>2020</span> became the 
          biggest tourney since the <span className='text-[#990000] font-bold'>BleedOut Tournament</span> back in 2016.
        </p>
        <p className='text-white/80 bg-black/30 p-6 rounded-xl border-gray-100 border leading-7'>
          This community-hosted event comprised of <span className='text-[#F77E21]'>38 teams</span> from different parts of the world. 
          Each team can have <span className='text-[#37E2D5]'>4 to 6</span> members, so the tournament spanned between <span className='text-[#37E2D5]'>152 to 228</span> 
          players competing for a cash prize of <span className='text-[#5FD068]'>$500</span>.
        </p>
      </div>
    </section>
  )
}

export default About