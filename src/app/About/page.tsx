import React from 'react'
import NavAfterLogin from '../NavAfterLogin/page'
import PersonalInfo from './PersonalInfo'
import Count from './Count'
import Vedio from './Vedio'
import Teams from './Teams'
import Clients from '../Components/Clients'
import Grow from './Grow'

const page = () => {
  return (
    <div>
      <NavAfterLogin></NavAfterLogin><br />
      <PersonalInfo></PersonalInfo>
      <Count></Count>
      <Vedio></Vedio>
      <Teams></Teams>
      <div className="text-center sm:mb-12">
              <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
                Big Companies Are Here
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-lg mx-auto">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
      <Clients></Clients>
      <Grow></Grow>
    </div>
  )
}

export default page
