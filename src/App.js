import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import ItemList from './components/ItemList';
import Footer from './components/Footer';
import FormSection from './components/FormSection';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DetailsPage from './components/DetailsPage';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  // const [items, setItems] = useState([]); // Replace this with actual data fetching

  const showLoginModal = () => setShowLogin(true);
  const closeLoginModal = () => setShowLogin(false);

  const login = () => {
    // Here would be the API call to validate credentials
    setUser({ name: 'User', avatarUrl: '/assets/images/default-avatar.png' });
    setShowLogin(false);
    setIsAdmin(false); // Set to true if user is an admin
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <Router>
      <div>
        <Navbar showLoginModal={showLoginModal} isAdmin={isAdmin} user={user} logout={logout} />
        <LoginModal showModal={showLogin} closeModal={closeLoginModal} login={login} />

        <FormSection /> {/* 新增的 FormSection 组件 */}

        <Routes>
          {/* 首页，展示 Item 列表 */}
          {/* <Route path="/" element={<ItemList items={items} />} /> */}
          <Route path="/" element={<ItemList />} />

          
          <Route path="/item/detail/:sid" element={<DetailsPage />} />
          
          {/* 你可以根据需要添加更多的路由 */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
