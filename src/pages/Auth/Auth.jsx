import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { logIn, signUp } from '../../Actions/AuthAction';
import './Auth.css';


const Auth = () => {
    //retrieve loading state from redux store
    const loading = useSelector((state)=> state.AuthReducer.loading);
    console.log(loading);

    const dispatch = useDispatch();
    const [isSignUp, setIsSignUp] = useState(false);

    //set state to collect form data
    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '', 
            phoneNo: '',
            username: '', 
            password: '', 
            confirmPass: ''
        });
    const [confirmPass, setConfirmPass] = useState(true);
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(isSignUp){
           formData.password === formData.confirmPass ? dispatch(signUp(formData)) : setConfirmPass(false);
        }
        else{
            dispatch(logIn(formData)); }
    }

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function resetForm(){
        setConfirmPass(true);
        setFormData({
            firstname: '',
            lastname: '',
            email: '', 
            phoneNo: '',
            username: '', 
            password: '', 
            confirmPass: ''
        })
    }

  return (
    <div className='auth'>
        <div className={isSignUp ? 'sign-up' : 'login'}>
            <form className={isSignUp ? 'signUp-form': 'login-form'} onSubmit={handleSubmit}>
            <h3 style={{fontSize: '25px'}}>{isSignUp ? 'Sign Up' : 'Log In'}</h3>
            {isSignUp && 
                <>
                <div>
                    <input type='text' placeholder='First Name' name='firstname' className='info-input' onChange={handleChange} value={formData.firstName}/>
                    <input type='text' placeholder='Last Name' name='lastname' className='info-input' onChange={handleChange} value={formData.lastName}/>
                </div>
                <div>
                <input type='email' placeholder='Email' name='email' className='info-input' onChange={handleChange} value={formData.email}/>
                <input type='text' placeholder='Phone Number' name='phoneNo' className='info-input' onChange={handleChange} value={formData.phoneNo}/>
                </div>
            </>
            }
            <div className={isSignUp ? '' : 'username'}>
            <input type='text' placeholder='Username' name='username' className={isSignUp ? 'info-input' : 'login-input'} onChange={handleChange} value={formData.username}/>
            </div>
            <div className={isSignUp ? '' : 'username'}>
            <input type='password' placeholder='Password' name='password' className={isSignUp ? 'info-input' : 'login-input'} onChange={handleChange} value={formData.password}/>
            {isSignUp && <input type='password' placeholder='Confirm Password' name='confirmPass' className='info-input' onChange={handleChange} value={formData.confirmPass}/>}
            </div>
            <span style={{display: confirmPass ? 'none' : 'block', color: 'red', fontSize: '14px', alignSelf: 'flex-end', paddingRight: '28px'}}>* Confirm Password is incorrect</span>
            <div className='span-btn'>    
            <button className={isSignUp? 'signUp-btn btn' : 'login-btn btn'} type='submit' disabled={loading}>
                {loading ? 'Loading..' : isSignUp ? 'Sign Up' : 'Log In'}
            </button>
            <span onClick={()=> {setIsSignUp((prev)=> !prev); resetForm()}}>
                {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
            </span>
            </div>
        </form>
    </div>
    </div>
  )
};


export default Auth