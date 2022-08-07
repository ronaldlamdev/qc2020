import React from 'react'

const About = () => {

  const teamsSteam = 'https://steamcommunity.com/groups/QuarantineCup2020/discussions/0/2264690481985652825/'
  const swissWiki = "https://en.wikipedia.org/wiki/Swiss-system_tournament"
  const playoffsWiki = 'https://en.wikipedia.org/wiki/Page_playoff_system#Page_playoff_system'

  return (
    <div name="about" className='mt-16 mx-auto max-w-[350px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px] 2xl:max-w-[1440px]'>
      <div className='flex flex-col lg:flex-row justify-around gap-8 text-center'>
        <p className='text-white/80 bg-black/30 p-6 rounded-xl border-gray-100 border leading-7'>
          The <span className='text-[#FFF9D7] font-bold'>Quarantine Cup</span> of <span className='text-red-700 font-bold'>2020</span> is an international competitive Left 4 Dead 2 tournament 
          that kicked off in April 16, 2020 and concluded in August 21, 2020, with European Team <span className='font-semibold text-[#BD4291]'>Frag4</span> as the <span className='text-[#FFEF82]'>champions </span>
          and North American Team <span className='text-[#EFD345] font-semibold'>LuckyGlock</span> as the <span className='text-[#A2B5BB] font-bold'>runner-up</span>.  
        </p>
        <p className='text-white/80 bg-black/30 p-6 rounded-xl border-gray-100 border leading-7'>
          The tournament was born out of the early periods of the global <span className='text-red-800 font-bold'>COVID-19</span> epidemic back in March 2020. Many Left 4 Dead 2 players found themselves
          at home more frequently due to the nationwide sanctioned lockdown, therefore giving players more time to <span className='text-[#53BF9D]'>scrim</span> (a gaming term for practicing 
          competitive games). For this reason, it is how the <span className='text-[#FFF9D7] font-bold'>Quarantine Cup</span> of <span className='text-red-700 font-bold'>2020</span> became the 
          biggest tourney since the <span className='text-[#990000] font-bold'>BleedOut Tournament</span> back in 2016.
        </p>
        <p className='text-white/80 bg-black/30 p-6 rounded-xl border-gray-100 border leading-7'>
          This community-hosted event was comprised of <span className='text-[#F77E21]'><a className='hover:underline hover:underline-offset-3' target="_blank" href={teamsSteam}>38 teams</a></span> from different parts of the world. 
          Each team can have <span className='text-[#37E2D5]'>4 to 6</span> members, resulting the tournament player count between <span className='text-[#37E2D5]'>152 to 228 </span> 
          players competing for a cash prize of <span className='text-[#5FD068]'>$500</span>. The tournament is also divided into 2 stages: a <span className='text-[#F77E21]'>
          6-round <a className='hover:underline hover:underline-offset-3' target="_blank" href={swissWiki}>Swiss Stage</a></span> and then a <span className='text-[#FF0063]'>
          Double Elimination <a className='hover:underline hover:underline-offset-3' target="_blank" href={playoffsWiki}> Playoffs Stage</a>
          </span>.
        </p>
      </div>
    </div>
  )
}

export default About