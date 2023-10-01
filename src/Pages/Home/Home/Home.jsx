import React from 'react'
import Banner from '../Banner/Banner'
import Welcome from '../Welcome/Welcome'
import DiplomaCourse from '../DiplomaCourse/DiplomaCourse'
import BscCourse from '../BscCourse/BscCourse'
import MscCourse from '../MscCourse/MscCourse'
import TopUniversity from '../TopUniversity/TopUniversity'
import Admission from '../Admission/Admission'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
  return (
    <>
      <Banner />
      <Welcome />
      <DiplomaCourse />
      <BscCourse />
      <MscCourse />
      <TopUniversity />
      <Admission />
      <Testimonial />
    </>
  )
}

export default Home
