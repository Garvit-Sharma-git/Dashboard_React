



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (response) => {
    // Save authentication status and navigate to the home page
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/home');
  };

  const handleGoogleLoginFailure = () => {
    alert('Google Sign-In was unsuccessful. Please try again.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/home');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <GoogleOAuthProvider clientId="384675909926-60k1pndu47b7bbtlte3v0ua3r27ks7oe.apps.googleusercontent.com">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        
        {/* Google OAuth Sign-In Button */}
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
