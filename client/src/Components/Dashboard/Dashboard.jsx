import React, { useState } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'

// Import icons
import { 
    FaHome, 
    FaCalendarCheck, 
    FaCalendarAlt, 
    FaCreditCard, 
    FaUsers, 
    FaSignOutAlt,
    FaChartLine,
    FaUserCheck,
    FaUserMinus,
    FaPercentage
} from 'react-icons/fa'

// Import logo
import logo from '../../assets/Logo.png'

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard')

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                {/* <div className="logo-container">
                    <img src={logo} alt="Prasanga Shopping Center" className="logo" />
                    <h2>Prasanga Shopping Center</h2>
                </div> */}
                
                <div className="sidebar-menu">
                    <div 
                        className={`menu-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => handleTabClick('dashboard')}
                    >
                        <FaHome className="menu-icon" />
                        <span>Dashboard</span>
                    </div>
                    
                    <div 
                        className={`menu-item ${activeTab === 'attendance' ? 'active' : ''}`}
                        onClick={() => handleTabClick('attendance')}
                    >
                        <FaCalendarCheck className="menu-icon" />
                        <span>Attendance</span>
                    </div>
                    
                    <div 
                        className={`menu-item ${activeTab === 'leave' ? 'active' : ''}`}
                        onClick={() => handleTabClick('leave')}
                    >
                        <FaCalendarAlt className="menu-icon" />
                        <span>Leave Management</span>
                    </div>
                    
                    <div 
                        className={`menu-item ${activeTab === 'payments' ? 'active' : ''}`}
                        onClick={() => handleTabClick('payments')}
                    >
                        <FaCreditCard className="menu-icon" />
                        <span>Payments</span>
                    </div>
                    
                    <div 
                        className={`menu-item ${activeTab === 'employees' ? 'active' : ''}`}
                        onClick={() => handleTabClick('employees')}
                    >
                        <FaUsers className="menu-icon" />
                        <span>Employees</span>
                    </div>
                </div>
                
                <div className="sidebar-footer">
                    <Link to="/login" className="logout-btn">
                        <FaSignOutAlt className="menu-icon" />
                        <span>Log Out</span>
                    </Link>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="main-content">
                <div className="content-header">
                    <h1>Overview</h1>
                    <div className="header-right">
                        <div className="date-display">
                            <span>{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        </div>
                        <div className="user-profile">
                            <span className="profile-icon">👤</span>
                        </div>
                    </div>
                </div>
                
                <div className="content-body">
                    {activeTab === 'dashboard' && (
                        <div className="dashboard-summary">
                            <div className="summary-cards">
                                {/* Card 1 */}
                                <div className="summary-card">
                                    <div className="card-icon employee-icon">
                                        <FaUsers />
                                    </div>
                                    <div className="card-content">
                                        <h3>Total Employees</h3>
                                        <p className="card-value">125</p>
                                        <p className="card-stat">
                                            <span className="positive">+5%</span> from last month
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Card 2 */}
                                <div className="summary-card">
                                    <div className="card-icon present-icon">
                                        <FaUserCheck />
                                    </div>
                                    <div className="card-content">
                                        <h3>Present Today</h3>
                                        <p className="card-value">112</p>
                                        <p className="card-stat">
                                            <span className="positive">+2%</span> from yesterday
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Card 3 */}
                                <div className="summary-card">
                                    <div className="card-icon leave-icon">
                                        <FaUserMinus />
                                    </div>
                                    <div className="card-content">
                                        <h3>On Leave Today</h3>
                                        <p className="card-value">13</p>
                                        <p className="card-stat">
                                            <span className="negative">+3</span> from yesterday
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Card 4 */}
                                <div className="summary-card">
                                    <div className="card-icon attendance-icon">
                                        <FaPercentage />
                                    </div>
                                    <div className="card-content">
                                        <h3>Attendance Rate</h3>
                                        <p className="card-value">89.6%</p>
                                        <p className="card-stat">
                                            <span className="positive">+1.2%</span> from last week
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Activity Chart Section */}
                            <div className="dashboard-charts">
                                <div className="chart-container">
                                    <div className="chart-header">
                                        <h3>Attendance Analytics</h3>
                                        <div className="chart-actions">
                                            <select className="chart-select">
                                                <option>July 2023</option>
                                                <option>June 2023</option>
                                                <option>May 2023</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="chart-placeholder">
                                        {/* Placeholder for actual chart */}
                                        <div className="chart-empty-state">
                                            <FaChartLine className="chart-icon" />
                                            <p>Attendance data visualization will appear here</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Additional Information Sections */}
                            <div className="additional-sections">
                                <div className="section">
                                    <div className="section-header">
                                        <h3>Recent Leave Requests</h3>
                                        <button className="view-all-btn">View All</button>
                                    </div>
                                    <div className="section-placeholder">
                                        <p>Recent leave request data will appear here</p>
                                    </div>
                                </div>
                                
                                <div className="section">
                                    <div className="section-header">
                                        <h3>Upcoming Payments</h3>
                                        <button className="view-all-btn">View All</button>
                                    </div>
                                    <div className="section-placeholder">
                                        <p>Upcoming payment information will appear here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'attendance' && (
                        <div className="attendance-content">
                            <div className="placeholder-content">
                                <h2>Attendance Management</h2>
                                <p>Attendance tracking and reporting will be implemented here</p>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'leave' && (
                        <div className="leave-content">
                            <div className="placeholder-content">
                                <h2>Leave Management</h2>
                                <p>Leave request and approval system will be implemented here</p>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'payments' && (
                        <div className="payments-content">
                            <div className="placeholder-content">
                                <h2>Payment Management</h2>
                                <p>Salary calculation and payment tracking will be implemented here</p>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'employees' && (
                        <div className="employees-content">
                            <div className="placeholder-content">
                                <h2>Employee Management</h2>
                                <p>Employee profiles and management will be implemented here</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dashboard