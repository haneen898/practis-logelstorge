
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home', { state: { user } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Enter username"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;