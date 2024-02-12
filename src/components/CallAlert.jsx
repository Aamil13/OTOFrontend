import React, { useContext } from 'react'
import { Alert, Button, Space } from 'antd'
import { SocketContext } from '../Context'


const CallAlert = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    // console.log("call",call.name);
  return (
    <>
    {call.isReceivingCall && !callAccepted && 
        (
    <Alert
    className='absolute top-2  right-2 w-72'
    message={`Incoming Call ${call.name}`}
    type="success"
    action={
      <Space>
        <Button className='bg-green-500' type="text" size="small" onClick={answerCall} >
          Answer
        </Button>
      </Space>
    }
    closable
    />
        )
}
</>
  )
}

export default CallAlert