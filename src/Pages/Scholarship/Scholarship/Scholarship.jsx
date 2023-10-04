import React from 'react'
import Banner from '../Banner/Banner'
import DiplomaScholarship from '../DiplomaScholarship/DiplomaScholarship'
import BachelorScholarship from '../BachelorScholarship/BachelorScholarship'
import AScholarship from '../../About/AScholarship/AScholarship'
import TopUniversity from '../../Home/TopUniversity/TopUniversity'
import MasterScholarship from '../MasterScholarship/MasterScholarship'

const Scholarship = () => {
  return (
    <>
      <Banner />
      <DiplomaScholarship />
      <AScholarship />
      <BachelorScholarship />
      <TopUniversity />
      <MasterScholarship />
    </>
  )
}

export default Scholarship
