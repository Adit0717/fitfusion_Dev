import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;