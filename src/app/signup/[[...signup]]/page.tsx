import React from 'react'
import { ClerkProvider, SignUp} from "@clerk/nextjs"
const publishableKey = 'pk_test_ZWFnZXItb3JjYS02OS5jbGVyay5hY2NvdW50cy5kZXYk'

const signup = () => {
  return (
    <div className='flex justify-center mt-5'>
             <div className='m-auto'>
              {/* <ClerkProvider publishableKey={publishableKey}> */}
    
                  <SignUp></SignUp>
              {/* </ClerkProvider> */}
              </div>
        </div>
  )
}

export default signup
