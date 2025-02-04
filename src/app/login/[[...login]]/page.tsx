import {  SignIn } from '@clerk/nextjs'


import React from 'react'

const login = () => {
 

  return (
    <div className='flex justify-center mt-5'>
         <div className='m-auto'>

              <SignIn forceRedirectUrl="/Shop"></SignIn>
          </div>
    </div>
  )
}

export default login
