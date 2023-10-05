import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import varsity2 from '../../../assets/image/varsity-2.jpg'
import varsity3 from '../../../assets/image/varsity-3.jpeg'
import varsity4 from '../../../assets/image/varsity-4.jpg'
import './Banner.css'
import { AiTwotonePhone } from 'react-icons/ai'

const Banner = () => {
  return (
    <>
      <div className="container md:pt-[70px]">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div>
              <img
                className="w-full md:h-[590px] h-[400px] "
                src={varsity2}
                alt=""
              />

              <div className="relative md:bottom-96 bottom-72">
                <div className=" py-2">
                  <h1 className="md:text-3xl text-lg text-[#ffffff] pl-12 font-bold">
                    100% scholarship Study in China
                  </h1>
                  <div className="md:text-2xl text-lg space-x-4 text-[#ffffff] pl-12 font-bold">
                    <span>Diploma ||</span>
                    <span>Bachelor ||</span>
                    <span>Master ||</span>
                    <span>Ph.D</span>
                  </div>

                  {/* -------phone------  */}
                  <div className="flex items-center gap-2 pl-12 ">
                    <div className="bg-[#09adfe] h-10 w-10 rounded-full flex justify-center items-center">
                      <AiTwotonePhone className="text-[#ffffff]" size={25} />
                    </div>
                    <div className="text-[16px] text-[#ffffff] font-medium">
                      <p>+88 01611910296</p>
                      <p>+88 01799731158</p>
                    </div>
                  </div>
                  <h2 className="md:text-2xl  text-lg pl-12 text-[#ffffff] font-semibold">
                    A World of Education Awaits You
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="w-full md:h-[590px] h-[400px] "
                src={varsity4}
                alt=""
              />

              <div className="relative md:bottom-96 bottom-72">
                <div className=" py-2">
                  <h1 className="md:text-3xl text-lg text-[#ffffff] pl-12 font-bold">
                    100% scholarship Study in China
                  </h1>
                  <div className="md:text-2xl text-lg space-x-4 text-[#ffffff] pl-12 font-bold">
                    <span>Diploma ||</span>
                    <span>Bachelor ||</span>
                    <span>Master ||</span>
                    <span>Ph.D</span>
                  </div>
                  <h2 className="md:text-2xl pt-5 text-lg pl-12 text-[#ffffff] font-semibold">
                    A World of Education Awaits You
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="w-full md:h-[590px] h-[400px] "
                src={varsity3}
                alt=""
              />

              <div className="relative md:bottom-96 bottom-72">
                <div className=" py-2">
                  <h1 className="md:text-3xl text-lg text-[#ffffff] pl-12 font-bold">
                    100% scholarship Study in China
                  </h1>
                  <div className="md:text-2xl text-lg space-x-4 text-[#ffffff] pl-12 font-bold">
                    <span>Diploma ||</span>
                    <span>Bachelor ||</span>
                    <span>Master ||</span>
                    <span>Ph.D</span>
                  </div>
                  <h2 className="md:text-2xl pt-5 text-lg pl-12 text-[#ffffff] font-semibold">
                    A World of Education Awaits You
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Banner
