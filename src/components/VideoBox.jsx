import React, { useContext } from 'react'
import { SocketContext } from '../Context'
import { DisconnectOutlined,AudioOutlined,VideoCameraAddOutlined,UserOutlined  } from '@ant-design/icons';
import { Button } from 'antd';

const VideoBox = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, audioOn,setAudioOn,videoOn,setVideoOn ,leaveCall } = useContext(SocketContext);
    // console.log(audioOn);

   

  return (
    <div className=' w-full flex justify-center items-center '>
        {
            stream && 
            
            <div className='relative w-full flex justify-center items-center '>
                {
                    videoOn ?
                    <video className={`${callAccepted ? "svidd" : "vidd" } `} playsInline muted ref={myVideo} autoPlay></video>
                    :

                   <div className={`w-full h-screen flex justify-center items-center ${callAccepted && "svidd bg-white"}`}>
                     <UserOutlined />
                   </div>
                }
                {
                    callAccepted && !callEnded &&
                    <video className="vidd"  playsInline muted ref={userVideo} autoPlay></video>
                  

                }
                
            <div className='absolute bottom-7 flex gap-6'>
                <Button onClick={()=>setAudioOn(!audioOn)} className={`${audioOn ? "bg-white" : "bg-red-500"} w-10 h-10 flex items-center justify-center rounded-full`}><AudioOutlined /></Button>
                <Button onClick={()=>setVideoOn(!videoOn)} className={`${videoOn ? "bg-white" : "bg-red-500"} w-10 h-10 flex items-center justify-center rounded-full`}><VideoCameraAddOutlined /></Button>
               {
                callAccepted && !callEnded &&
                <Button onClick={leaveCall} className={`bg-white w-10 h-10 flex items-center justify-center rounded-full`}><DisconnectOutlined /></Button>

               }
            </div>
        </div>
        }
       
    </div>
  )
}

export default VideoBox