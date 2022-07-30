import React from 'react'

const About = () => {
  return (
    <section id='about' className='mt-32 mx-auto max-w-[400px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px] 2xl:max-w-[1440px]'>
      <div className='flex flex-col lg:flex-row justify-around gap-8 text-center'>
        <p className='text-white/80 bg-black/30 p-6 rounded-xl border-gray-100 border'>
          The <span className='text-[#FFF9D7] font-bold'>Quarantine Cup</span> of <span className='text-red-700 font-bold'>2020</span> is an international competitive Left 4 Dead 2 tournament 
          that kicked off in April 16, 2020 and concluded in August 21, 2020, with European Team <span>Frag4</span> as the champions
          and North American Team <span>LuckyGlock</span> as the runner-up.  
        </p>
        <p className='text-white/80 bg-black/30 p-6 rounded-xl border-gray-100 border'>
          The tournament was born out of the early periods of the global COVID epidemic back in March 2020. Many Left 4 Dead players found themselves
          at home more frequently due to the nationwide sanctioned lockdown, therefore giving players more time to scrim (a gaming term for practicing 
          competitive games). For this reason, it is how the Quarantine Cup of 2020 became the biggest tourney since the BleedOut Tournament of 2016.
        </p>
        <p className='text-white/80 bg-black/30 p-6 rounded-xl border-gray-100 border'>
          This community-hosted event comprised of 38 teams from different parts of the world. 
          Each team can have 4 to 6 members, so the tournament spanned between 152 to 228 players competing for a cash prize of $500.
        </p>
      </div>
    </section>
  )
}

export default About