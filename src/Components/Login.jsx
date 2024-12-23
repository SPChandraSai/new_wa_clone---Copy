//rfce for the template
import React from 'react'
import { Fingerprint, LogIn as LoginIcon} from 'lucide-react';
// another way of using the login icon
function Login() {
  return (
    <>
      <div className='h-[220px] bg-[#04a784] '>

        <div className='flex ml-[200px] pt-10 items-center gap-4'>
          <img src="https://whatsapp-clone-826a9.web.app/whatsapp.svg" alt="" 
          className='h-8'/>
          <div className='text-white uppercase font-medium '>Whatsapp</div>
        </div>
      </div>
      <div className='bg-[#eff2f5] h-[calc(100vh-220px)] flex justify-center items-center relative'>
        <div className=' h-[100%] w-[50%] bg-white shadow-2xl flex flex-col gap-4 justify-center items-center absolute top-[-93px]'>
          <Fingerprint className='h-20 w-20 text-[#04a784]' strokeWidth={1}/>
          <div>Sign In</div>
          <div className='text-gray-500'>Sign in with your google account to get started.</div>
          <button className='flex gap-2 items-center bg-[#04a784] p-3 text-white rounded-[5px]'>
            <div>
              Sign in with Google
            </div>
             <LoginIcon />
          </button>
        </div>
      </div>
    </>
  )
}

export default Login
