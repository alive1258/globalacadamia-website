import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaPinterestP } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GrLocation } from 'react-icons/gr'
import { AiTwotonePhone } from 'react-icons/ai'
import { BiLogoLinkedin } from 'react-icons/bi'
import { MdOutlineMailOutline } from 'react-icons/md'
import logo from '../../assets/image/GALogos.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <div className="bg-black text-white md:pb-2 pt-14">
        <div className="container px-6">
          <div className="py-6">
            <div className="grid border-b md:grid-cols-2 grid-cols-1 gap-2  pb-8">
              <div>
                <div className="flex items-center gap-2">
                  <Link to="/">
                    <img className="h-16 " src={logo} alt="" />
                  </Link>

                  <div className="text-2xl text-[#09adfe] font-bold ">
                    Global Acadamia
                  </div>
                </div>
                <div className="pt-6 text-[16px] font-medium">
                  <p>
                    Explore the transformation power of education as we provide
                    insights,
                    <br /> resources, Visa, scholarships, and solutions to
                    learners of all students.
                  </p>
                  <p className="pt-4">A World of Education Awaits You.</p>
                  <div className="flex mt-4 items-center gap-2">
                    <GoLocation size={25} />
                    SS Road, Sirajganj, Bangladesh
                  </div>
                </div>
              </div>
              <div>
                <div className="grid md:grid-cols-3 grid-cols-1 md:pt-6 gap-4">
                  <div cl>
                    <p className="text-2xl font-bold pb-6 text-white">
                      Get To Know Us
                    </p>
                    <div className="space-y-2 text-[16px] font-medium cursor-pointer">
                      <p>Home</p>
                      <p>About</p>
                      <p>Services</p>
                      <p>Study Abroad</p>
                      <p>Scholarship </p>
                      <p>Contact </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold pb-6 text-white">
                      Let Us Help You
                    </p>
                    <div className="space-y-2 text-[16px] font-medium">
                      <p>Get 100% Scholarship </p>
                      <p>Get Best University</p>
                      <p>100% Visa Success</p>
                      <p>Get Your Course</p>
                      <p>Get Hostel Cost Free</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold pb-6 text-white">
                      Contact Us
                    </p>
                    <div className="space-y-4">
                      {/* -------phone------  */}
                      <div className="flex items-center gap-2">
                        <div className="bg-[#09adfe] h-10 w-10 rounded-full flex justify-center items-center">
                          <AiTwotonePhone className="" size={25} />
                        </div>
                        <div className="text-[16px] font-medium">
                          <p>+88 01611910296</p>
                          <p>+88 01799731158</p>
                        </div>
                      </div>
                      {/* -------email------  */}
                      <div className="flex items-center gap-2">
                        <div className="bg-[#09adfe] h-10 w-10 rounded-full flex justify-center items-center">
                          <MdOutlineMailOutline className="" size={25} />
                        </div>
                        <div className="text-[16px] font-medium">
                          <p>info111@gmail.com</p>
                          <p>help999@gmail.com</p>
                        </div>
                      </div>
                      {/* -------location------  */}
                      <div className="flex items-center gap-2">
                        <div className="bg-[#09adfe] h-10 w-10 rounded-full flex justify-center items-center">
                          <GoLocation className="" size={25} />
                        </div>
                        <div className="text-[16px] font-medium">
                          <p>SS Read, Sirajganj</p>
                          <p>Bangladesh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 pb-4 flex justify-between flex-wrap">
              <div>
                <p className="text-white">
                  © Copyright {currentYear}, All Rights Reserved by Global
                  Acadamia
                </p>
              </div>

              <div>
                <div className="flex gap-4">
                  <p className="text-white">Follow us on:</p>

                  <div className="bg-gray-400 hover:bg-[#28589c] text-white h-8 w-8 rounded-full flex items-center justify-center">
                    <FaFacebookF />
                  </div>
                  <div className="bg-gray-400 hover:bg-[#E1306c] text-white h-8 w-8 rounded-full flex items-center justify-center">
                    <BsInstagram />
                  </div>
                  <div className="bg-gray-400 hover:bg-[#ff0000] text-white h-8 w-8 rounded-full flex items-center justify-center">
                    <AiFillYoutube />
                  </div>
                  <div className="bg-gray-400 hover:bg-blue-700 text-white h-8 w-8 rounded-full flex items-center justify-center">
                    <BiLogoLinkedin />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
