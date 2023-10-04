import React from 'react'
import { PiGraduationCap, PiStudentDuotone } from 'react-icons/pi'
import { FaUniversity, FaFileInvoiceDollar } from 'react-icons/fa'
import { BiBookBookmark } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <>
      <div className="">
        <div>
          <h1 className="text-center md:text-3xl text-xl font-bold">
            Discover Global Acadamia
          </h1>
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="text-xl font-bold text-[#09adfe]">Discover</h1>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-4 grid-cols-1 gap-3  px-6 container">
          {/* Students  */}
          <div className="bg-[#282d36] px-6 py-3 flex  items-center gap-8 hover:bg-black cursor-pointer">
            <div>
              <PiStudentDuotone size={80} className="text-[#09adfe]" />
            </div>
            <div className="text-2xl font-bold text-[#ffffff]">
              <h2>300+</h2>
              <h1>Students</h1>
            </div>
          </div>

          {/* University  */}

          <div className="bg-[#282d36] px-6 py-3 flex  items-center gap-8 hover:bg-black cursor-pointer">
            <div>
              <FaUniversity size={70} className="text-[#09adfe]" />
            </div>
            <div className="text-2xl font-bold text-[#ffffff]">
              <h2>150+</h2>
              <h1>University</h1>
            </div>
          </div>
          {/* Scholarship  */}
          <div className="bg-[#282d36] px-6 py-3  hover:bg-black cursor-pointer">
            <Link to="/scholarship" className="flex  items-center  gap-8">
              <div>
                <FaFileInvoiceDollar size={65} className="text-[#09adfe]" />
              </div>
              <div className="text-2xl font-bold text-[#ffffff]">
                <h2>100%</h2>
                <h1>Scholarship</h1>
              </div>
            </Link>
          </div>
          {/* Visa Success  */}
          <div className="bg-[#282d36] px-6 py-3  hover:bg-black cursor-pointer">
            <Link to="/services" className="flex  items-center  gap-8">
              <div>
                <BiBookBookmark size={70} className="text-[#09adfe]" />
              </div>
              <div className="text-2xl font-bold text-[#ffffff]">
                <h2>100%</h2>
                <h1>Visa Success</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
