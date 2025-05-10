import React from 'react'
import './Login.css'

// Importing react-router-dom for navigation
import { Link, NavLink } from 'react-router-dom'

// Import our assets
import image from '../../LoginAssets/Payrollcover.jpg'
import logo from '../../LoginAssets/Watermark.png'

// Importing icons
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Login = () => {
    return (
        <div className='loginPage flex'>
            <div className="container flex">

                <div className="imageDiv">
                    <img src={image} alt="Payroll Cover" />

                    <div className="textDiv">
                        <h2 className='title'>Create and Sell Extraordinary Products</h2>
                        <p>Adopt the peace of nature!</p>
                    </div>
                </div>

                <div className='formDiv flex'>
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Welcome Back!</h3>
                    </div>

                    <form action="" className='form grid'>
                        <span>Login status will go here</span>

                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='username' placeholder='Enter your username' />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input type="password" id='password' placeholder='Enter your password' />
                            </div>
                        </div>
                        
                        <button type='submit' className='btn flex'>
                            <span>Login</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>

                        <span className='forgotPassword'>
                            Forgot your passsword <a href="">Click Here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
