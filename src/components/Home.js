import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div>
      <h1>Welcome, {user}!</h1>
      {/* Display more user information here */}
    </div>
  );
}
export default Home;