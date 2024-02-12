import React from 'react'
import SideBar from '../components/SideBar'
import Main from '../components/Main'
import CallAlert from '../components/CallAlert'


const CallPage = () => {
  return (
    <div className='flex '>
        <SideBar/>
        <Main/>
        <CallAlert/>
    
    </div>
  )
}

export default CallPage