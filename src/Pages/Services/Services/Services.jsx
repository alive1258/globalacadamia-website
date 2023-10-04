import React from 'react'
import Banner from '../Banner/Banner'
import VisaProcess from '../VisaProcess/Visaprocess'
import TravelSupport from './../TravelSupport/TravelSupport'
import TopUniversity from '../../Home/TopUniversity/TopUniversity'
import Admission from '../Admission/Admission'
import Guideline from '../Guideline/Guideline'

const Services = () => {
  return (
    <>
      <Banner />

      <VisaProcess />
      <TravelSupport />
      <TopUniversity />
      <Admission />
      <Guideline />
      {/* <p>Admission</p> */}
      {/* <p>financial-assistantion.</p>
      <p>manage-scholarship</p>
      <p>/student-assessment.</p>
      <p>Guideline/ Counseling</p> */}
      {/* <p>Guideline to Visa Process</p> */}
      {/* <p>Travel Assistance</p> */}
      {/* <p>Pre-Departure Orientation</p> */}
    </>
  )
}

export default Services
