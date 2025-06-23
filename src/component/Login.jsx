import React, { useState } from 'react';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      window.location.href = '/resume.html'; 
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div style={{
      fontFamily: 'Arial, Helvetica, sans-serif',
      backgroundColor: '#f0f0f0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: 0
    }}>
      <form onSubmit={validateLogin} style={{
        width: '300px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1>Login Form</h1>
        </div>

        <div>
          <label htmlFor="username"><b>Username</b></label>
          <input
            type="text"
            placeholder="Enter Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />

          <label htmlFor="password"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>Login</button>
          <label>
            <input type="checkbox" defaultChecked name="remember" /> Remember me
          </label>
        </div>

        <div style={{ backgroundColor: '#f1f1f1', paddingTop: '10px' }}>
          <button type="button" style={{ ...buttonStyle, backgroundColor: '#f44336' }}>Cancel</button>
          <span className="psw"> <a href="#">Forgot password?</a></span>
        </div>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '6px 0 12px 0',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#04AA6D',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '10px'
};

export default Login;
