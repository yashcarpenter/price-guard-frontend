import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [message, setMessage] = useState('');

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
            const response = await axios.post('http://localhost:9020/api/register/verify/email', requestPayload);
            const responseMessage = response.data.message || 'OTP sent to ' + email;
            setMessage(responseMessage);

            if (response.data.status === 'OK') {
                setShowOtpInput(true);
            }
        } catch (error) {
            setMessage('Failed to send OTP, please try again.');
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post('http://localhost:9020/api/verify-otp', { email, otp });
            if (response.data.status === 'VERIFIED') {
                window.location.href = '/next-page'; // Redirect to the next page
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            setMessage('Failed to verify OTP, please try again.');
        }
    };

    return (
        <div className="container">
            <h1>Email Verification</h1>
            <div className="form-group">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input-field"
                />
                <button onClick={handleSendOtp} className="btn btn-primary">Verify</button>
            </div>

            {showOtpInput && (
                <div className="form-group otp-container">
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        className="input-field"
                    />
                    <button onClick={handleVerifyOtp} className="btn btn-primary">Submit OTP</button>
                </div>
            )}

            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default SignUp;
