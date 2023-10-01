import React from 'react'
import Marquee from 'react-fast-marquee'
import MarquereVarsity from './MarquereVarsity'
import { PiGraduationCap } from 'react-icons/pi'

const TopUniversity = () => {
  return (
    <>
      <div className="container mt-28 pb-20">
        <div>
          <h1 className="text-3xl text-center text-[#000] font-bold">
            Top University
          </h1>
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="text-xl font-bold text-[#09adfe]">Top</h1>
          </div>
        </div>
        <div className="pt-14">
          <Marquee speed={50} className="mt">
            <MarquereVarsity />
          </Marquee>
        </div>
      </div>
    </>
  )
}

export default TopUniversity
