import React from 'react'
import NavAfterLogin from '../NavAfterLogin/page'
import TeamImg from './TeamImg'
import MoreTeamsC from './MoreTeamsC'
import Freetrial from '../Components/freetrial'

const page = () => {
  return (
    <div>
      <NavAfterLogin></NavAfterLogin><br />
      <TeamImg></TeamImg>
      <MoreTeamsC></MoreTeamsC>
      <Freetrial ></Freetrial>
    </div>
  )
}

export default page
