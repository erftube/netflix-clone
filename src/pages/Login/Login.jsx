import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import {login, signUp} from "../../firebase"
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoadin] = useState(false);
  
  const stateHandler = () => {
    signState === "Sign In" ? setSignState("Sign Up"):setSignState("Sign In")
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    // console.log(name);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  const userAuth = async (e)=> {
    e.preventDefault();
    setLoadin(true);
    if(signState==="Sign In"){
      await login(email, password);
    }else{
      await signUp(name, email, password);
    }
    setLoadin(false);
  }

  return (
    loading?
      <div className="login-spinner">
        <img src={netflix_spinner} alt='loading spinner'/>
      </div>
    :
      <div className='login'>
        <img className="login-logo" src={Logo} alt="logo" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form>
            {signState !== "Sign In" && <input type='text' placeholder='Your Name' value={name} onChange={nameHandler}/>}
            <input type='email' placeholder='Email' value={email} onChange={emailHandler}/>
            <input type='Password' placeholder='Password' value={password} onChange={passwordHandler} />
            <button onClick={userAuth} type='submit'>{signState}</button>
            <div className="form-help">
              {signState === "Sign In" ? <p></p> : (<div className="remember">
                <input type='checkbox' />
                <label htmlFor=''>Remember Me</label>
              </div>)}

              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Sign In" ?
            <p>New to Netflix? <span onClick={stateHandler}>Sign Up Now</span></p>
            :
            <p>Already have an account? <span onClick={stateHandler}>Sign In Now</span></p>
            }
            
          </div>
        </div>
      </div>
  )
}

export default Login