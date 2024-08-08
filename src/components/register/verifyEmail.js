import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './verifyEmail.css';
import image from '../../resources/verify-email-image.png';

const VerifyEmail = () => {
    const navigate = useNavigate();
    const [sentOTP, setSentOtp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    // State to hold additional information
    const [deviceInfo, setDeviceInfo] = useState({
        ipAddress: '',
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        deviceType: '',
        osName: '',
        osVersion: '',
        browserName: '',
        browserVersion: '',
        deviceId: '',
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        hardwareInfo: '',
        networkType: ''
    });

    useEffect(() => {
        // Function to detect device type and other info (mocked for simplicity)
        const detectDeviceInfo = () => {
            const userAgent = navigator.userAgent;
            let deviceType = 'unknown';
            if (/mobile/i.test(userAgent)) {
                deviceType = 'mobile';
            } else if (/tablet/i.test(userAgent)) {
                deviceType = 'tablet';
            } else {
                deviceType = 'desktop';
            }
            setDeviceInfo(prev => ({
                ...prev,
                deviceType,
                osName: navigator.platform,
                browserName: userAgent.split(' ')[0] // Simplified browser name detection
            }));
        };

        detectDeviceInfo();
    }, []);

    const handleSendOtp = async () => {
        const requestPayload = {
            email,
            ...deviceInfo
        };
        try {
            const response = await axios.post('http://localhost:8081/api/register/verify/email', requestPayload);
            if(response.status === 200){
                setSentOtp(true);
                console.log("Otp sent successfully");
            } else{
                setError(response.data.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleVerifyOtp = async () => {
        const verifyEmailOtpDto = {
            email,
            password,
            otp
        };
        try {
            const response = await axios.post('http://localhost:8081/api/register/verify/email/otp', verifyEmailOtpDto);
            if (response.status === 200 && response.data.data === 'VERIFIED') {
                navigate('/');
            } else {
                alert('OTP verification failed. Please try again.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='verify-email-page-container'>
            <div className='verify-email-box-container'>
                {!sentOTP ? (
                    <div className='verify-email-inner-container'>
                        <div className='verify-email-header-outer-container'>
                            <div className='verify-email-header-inner-container'>
                                <div className='verify-email-header-image-container'><img src={image} className='verify-email-image'/></div>
                                <h2>Verify Email</h2>
                            </div>
                        </div>
                        <div className='verify-email-input-container'>
                            <input
                                placeholder="Enter your email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input 
                                type='password'
                                placeholder="Enter password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <input 
                                type='password'
                                placeholder="Confirm password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <p>{Error}</p>
                            <button onClick={handleSendOtp}>Send OTP</button>
                        </div>
                    </div>
                ) : (
                    <div className='verify-email-inner-container'>
                        <div className='verify-email-header-outer-container'>
                            <div className='verify-email-header-inner-container'>
                                <div className='verify-email-header-image-container'><img src={image} className='verify-email-image'/></div>
                                <h2>Verify Email</h2>
                            </div>
                        </div>
                        <div className='verify-email-input-container'>
                            <input 
                                placeholder="Enter OTP" 
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                            />
                            <button onClick={handleVerifyOtp}>Verify</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;
