import { Alert, Button, Divider } from 'antd'
import Input from 'antd/es/input/Input'
import {  Typography } from 'antd';
import { CopyOutlined,PhoneOutlined } from '@ant-design/icons';
import React, { useState, useContext } from 'react';
import { SocketContext } from '../Context';


const { Text } = Typography;


const SideBar = () => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const [err, setErr] = useState(false)
  // console.log(idToCall);

  const handleCall =()=>{
    
    if(!name || !idToCall){
      return setErr(true)
    }
    setErr(false)
    callUser(idToCall)
  }
  return (
    <div className='bg-blue-500 p-5 w-[350px] h-screen'>
        <p className='text-4xl text-white font-extrabold py-5'>Connect</p>

        <div className='h-2/3 flex flex-col justify-center gap-4'>
            <Input  type="text"  placeholder='user name' value={name} onChange={(e) => setName(e.target.value)} />
            <Text className='text-center text-white' code>{me}</Text>
            <Button className='bg-white flex justify-center items-center' type="dashed" onClick={()=>navigator.clipboard.writeText(me)}>Copy to clipboard <CopyOutlined /></Button>

            <Divider className='bg-white'/>

            <Input  type="text"  placeholder='Person id to call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
            {
              callAccepted && !callEnded ? 

            <Button className='bg-red-500 flex justify-center items-center' type="dashed" onClick={leaveCall}>Hang Call<PhoneOutlined /></Button>
              :

            <Button className='bg-white flex justify-center items-center' type="dashed" onClick={() => handleCall()}>Initiate Call <PhoneOutlined /></Button>

            }
            {
              err && <p className='text-red-600 text-center'>All the fields required!</p>
            }
        </div>
    </div>
  )
}

export default SideBar