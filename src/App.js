import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import Footer from './components/Footer';
import FormSection from './components/FormSection';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DetailsPage from './components/DetailsPage';
import LoginPage from './components/LoginPage';
import api from './utils/axiosConfig';  

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 尝试从 localStorage 中获取 JWT 和用户信息
    const token = localStorage.getItem('jwtToken');
    const userInfoString = localStorage.getItem('userInfo');

    if (token && userInfoString) {
        try {
            const userInfo = JSON.parse(userInfoString);
            setUser(userInfo); // 恢复用户信息，包括用户名、头像和角色信息
        } catch (error) {
            console.error('Failed to parse user information from localStorage:', error);
            localStorage.removeItem('userInfo'); // 如果解析失败，清除用户信息
        }
    }
}, []);


  const logout = () => {
    // 用户登出时，清除用户信息和 token
    setUser(null);
    localStorage.removeItem('jwtToken');
  };

  return (
    <Router>
      <div>
        <Navbar user={user} logout={logout} />
        <Routes>
          <Route path="/" element={<><FormSection /><ItemList /></>} />
          <Route path="/item/detail/:sid" element={<DetailsPage user={user} logout={logout} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;