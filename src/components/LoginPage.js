import React, { useState } from 'react';
import '../assets/css/LoginPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import newLogo from '../assets/images/adminLogo.png';
import api from '../utils/axiosConfig';  // 导入配置好的 Axios 实例
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const LoginPage = ({ setUser }) => {
    console.log('API_BASE_URL:', process.env.REACT_APP_API_BASE_URL);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/item/user/login`, {
                name: username,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.status === 200) {
                const responseData = response.data;
                if (responseData.data && responseData.data.token) {
                    const token = responseData.data.token;
                    localStorage.setItem('jwtToken', token);
    
                    // 使用 jwtDecode 解码 token
                    const decodedToken = jwtDecode(token);
                    const userId = decodedToken.sub; // 假设 token 中有用户 ID 字段
    
                    // 使用 userId 获取用户的详细信息
                    const userDetailsResponse = await api.get(`/user/findDTOById/${userId}`);
                    if (userDetailsResponse.status === 200) {
                        const userDetails = userDetailsResponse.data.data;
                        const { name, avatarUrl, roles } = userDetails;
    
                        const isAdmin = roles.some(role => role.name === 'ADMIN');
    
                        // 更新本地存储中保存的用户信息
                        const userInfo = { name, avatarUrl, token, isAdmin };
                        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    
                        // 使用 setUser 更新用户状态
                        setUser(userInfo);
    
                        // 重定向到登录前的页面或首页
                        navigate(location.state?.from || '/');
                    }
                } else {
                    console.log('Invalid response structure: Token not found');
                }
            } else {
                console.log('Invalid credentials');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-logo">
                    <img src={newLogo} className="logo" alt="Logo" />
                </div>
                <div className="divider"></div>
                <div className="login-form">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
