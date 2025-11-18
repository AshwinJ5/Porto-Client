import  { useState, useEffect } from 'react';
import { loginAPI, registerAPI } from '../Services/allApi';
import { useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';

function Authentication() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [userData,setUserData]=useState({username:"",email:"",password:""})
  const [tempPassword,setTempPassword]=useState("")
  const navigate=useNavigate()

  const toggle = () => {
    setIsSignIn(!isSignIn);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSignIn(true);
    }, 200);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);
  console.log(userData);

  const handleRegister=async(e)=>{
    e.preventDefault()
    const{username,email,password}=userData
    if (!username || !email || !password || !tempPassword) {
        toast.warning("Please Fill The Fields")
        } else if(userData.password!==tempPassword) {
          toast.error("Password Mismatch")
        } else {
          const result = await registerAPI(userData)
        console.log(result);
        if(result.status===200){
          toast.success("User Successfully Registered")
              setUserData({
                email:"",password:"",username:""
              })
              setTempPassword("")
              setTimeout(()=>{
                  navigate('/sign')
              })
        }else{
            alert(result.response.data)
        }
    }
}

const handleLogin= async(e)=>{
  e.preventDefault()
  // console.log(userData);
  const{email,password}=userData
  if ( !email || !password) {
      toast.warning("Please Fill The Fields")
  } else {
      const result = await loginAPI({email,password})
      console.log(result);
      if(result.status===200){
          sessionStorage.setItem("username",result.data.existingUser.username)
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("userId",result.data.existingUser._id)
            setUserData({
              email:"",password:""
            })
           toast.success(`User ${result.data.existingUser.username} Logged in Successfully`)
            setTimeout(() => {
              navigate('/')
            }, 2000);
          
      }else{
          alert(result.response.data)               
      }
      
  }
}


  return (
    <div className='authenMain'>
      <div id="container" className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
        <div className="row">
          {/* Sign Up Form */}
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className="fa-solid fa-user"></i>
                  <input  onChange={(e)=>setUserData({...userData,username:e.target.value})} value={userData.username} type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className="fa-solid fa-at"></i>
                  <input  onChange={(e)=>setUserData({...userData,email:e.target.value})} value={userData.email} type="email" placeholder="Email" />
                </div>
                <div className="input-group">
                <i className="fa-solid fa-lock"></i>
                <input type="password"  onChange={(e) => setTempPassword(e.target.value)} value={tempPassword} placeholder="Password" />
                </div>
                <div className="input-group">
                <i className="fa-solid fa-eye-slash"></i>
                  <input  onChange={(e)=>setUserData({...userData,password:e.target.value})} value={userData.password} type="password" placeholder="Confirm password" />
                </div>
                <button onClick={handleRegister}>Sign up</button>
                <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle} className="pointer ms-2">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>

          {/* Sign In Form */}
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                <i className="fa-solid fa-user"></i>
                  <input type="text" placeholder="Email" onChange={(e)=>setUserData({...userData,email:e.target.value})} value={userData.email} />
                </div>
                <div className="input-group">
                <i className="fa-solid fa-lock"></i>
                  <input type="password" placeholder="Password"  onChange={(e)=>setUserData({...userData,password:e.target.value})} value={userData.password}/>
                </div>
                <button onClick={handleLogin}>Sign in</button>
                {/* <p>
                  <b>Forgot password?</b>
                </p> */}
                <p>
                  <span>{"Don't have an account?"}</span>
                  <b onClick={toggle} className="pointer ms-2">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="row content-row">
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome</h2>
            </div>
            <div className="img sign-in"></div>
          </div>
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition= {Bounce}
      />

    </div>
  );
}

export default Authentication;
