import { Button, Divider, Paper, TextField, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { BiQrScan } from 'react-icons/bi';
import { useNavigate } from 'react-router';

const OTPButton = styled(Button)`
    color: #687e96;
    background: #9da7b7;
    width: 250px;
    margin-top: 30px;
    margin-bottom: 20px;
    text-transform: capitalize;
    &:hover {
        background: #9da7b7;
    }
`;

const ScanButton = styled(Button)`
    color: white;
    background: #28313b;
    width: 250px;
    margin-top: 30px;
    margin-bottom: 20px;
    text-transform: capitalize;
    &:hover {
        background: #28313b;
    }
`;

const Login = () => {
    const [phone, setPhone] = useState('');
    const [sendOtp, setSendOtp] = useState(false);
    const [counter, setCounter] = useState(59);
    const [otp, setOtp] = useState('');
    const naivgate = useNavigate();

    const handleSubmit = async (e) => {
        const mobile = phone;
        e.preventDefault();
        const data = { mobile_number: mobile['phone'].slice(2) };
        await fetch('https://niobooks.in/api/web/request_otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Client: 'web',
            },
            body: JSON.stringify(data),
        })
            .then((res) => (res.ok ? setSendOtp(true) : setSendOtp(false)))
            .catch((err) => console.log(err));
    };

    const handleSubmitOtp = async (e) => {
        const mobile = phone;
        const data = { mobile_number: mobile['phone'].slice(2), otp_code: otp };
        e.preventDefault();
        await fetch(' https://niobooks.in/api/web/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Client: 'web',
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(data));
                naivgate('/item');
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (sendOtp) {
            const timer =
                counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [counter, sendOtp]);

    return (
        <Paper
            sx={{
                height: '55vh',
                width: '50vh',

                marginLeft: '70px',
            }}
            elevation={4}
        >
            <Box sx={{ padding: '30px' }}>
                <Typography sx={{ fontSize: '19px' }}>
                    Login to mybillbook
                </Typography>
                <Typography
                    sx={{
                        fontSize: '14px',
                        color: '#687e96',
                        marginTop: '20px',
                        marginBottom: '5px',
                    }}
                >
                    Enter Mobile Number
                </Typography>
                <PhoneInput
                    inputStyle={{ width: '250px' }}
                    country={'in'}
                    onChange={(phone) => setPhone({ phone })}
                    enableSearchField
                />
                {sendOtp ? (
                    <div>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                color: '#687e96',
                                marginTop: '20px',
                                marginBottom: '5px',
                            }}
                        >
                            Enter OTP
                        </Typography>
                        <TextField
                            placeholder='One Time Password'
                            size='small'
                            sx={{ width: '250px' }}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <Typography
                            sx={{
                                color: '#687e96',
                                fontSize: '13px',
                                marginTop: '15px',
                            }}
                        >
                            Resend OTP in <strong>00:{counter} </strong>seconds
                        </Typography>
                        <OTPButton onClick={handleSubmitOtp}>Login</OTPButton>
                    </div>
                ) : (
                    <div>
                        <OTPButton onClick={handleSubmit}>Get OTP</OTPButton>
                        <Divider>
                            <Typography sx={{ color: '#687e96' }}>
                                Or
                            </Typography>
                        </Divider>
                        <ScanButton>
                            <BiQrScan />
                            Login scanning by QR code
                        </ScanButton>
                    </div>
                )}
            </Box>
        </Paper>
    );
};

export default Login;
