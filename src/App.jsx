import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Users from './components/Users.jsx'; 
import Settings from './components/Settings.jsx';
import Transactions from './components/Transactions.jsx';
import Schedule from './components/Schedule.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'; 
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';  
import Signup from './pages/Signup.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
  // Initialize authentication state from localStorage (if it exists)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  // Store authentication state in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        
        <div className="content">
          <Routes>
            {/* Always Redirect "/" to "/login" */}
            <Route path="/" element={<Navigate to="/login" />} />
            
            {/* Login Route */}
            <Route 
              path="/login" 
              element={<Login setIsAuthenticated={setIsAuthenticated} />} 
            />
            <Route path="/signup" element={<Signup />} />
            
            {/* Private Routes - Protected with PrivateRoute */}
            <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/home" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/schedule" element={<Schedule />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



