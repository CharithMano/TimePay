import React, { useState } from 'react'
import './Login.css'

// Importing react-router-dom for navigation
import { Link, NavLink, useNavigate } from 'react-router-dom'

// Import our assets
import image from '../../assets/Payrollcover.jpg'
import logo from '../../assets/Logo.png'

// Import icons
import { FaUser, FaLock, FaQuestionCircle, FaPhone, FaSpinner } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Set loading state
        setIsLoading(true);
        
        // Simulate API call delay
        setTimeout(() => {
            // Navigate to Dashboard regardless of credentials
            navigate('/dashboard');
        }, 1000);
    }

    return (
        <div className="login-container">
            <div className="login-left">
                <div className="cart-image">
                    <img src={image} alt="Shopping Cart" className="background-image" />
                </div>
                <div className="login-info">
                    <h2>Welcome to Prasanga Shopping Center</h2>
                    <div className="help-section">
                        <p>NEED HELP? LET US KNOW</p>
                        <p><FaPhone className="phone-icon" /> +1 321 414 3344 | support@unibillcover.com</p>
                    </div>
                </div>
            </div>
            <div className="login-right">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className="login-form-container">
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <input 
                                type="text" 
                                placeholder="Email/Mobile Number"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="login-btn" 
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="loading-text">
                                    <FaSpinner className="spinner-icon" /> Logging in...
                                </span>
                            ) : 'LOG IN'}
                        </button>
                        <div className="signup-option">
                            <p>Don't have an account?</p>
                            <Link to="/signup" className="signup-btn">SIGN UP</Link>
                        </div>
                        <div className="forgot-password">
                            <Link to="/forgot-password">Forgot your password?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
