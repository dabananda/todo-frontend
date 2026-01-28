import { useState } from 'react';
import { loginUser, saveLoggedInUser, setToken } from '../services/AuthService';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigator = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    await loginUser(username, password)
      .then((response) => {
        const token = `Bearer ${response.data.accessToken}`;
        const role = response.data.role;
        setToken(token);
        saveLoggedInUser(username, role);
        navigator('/todos');
        window.location.reload(false);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='card w-50 mx-auto my-3'>
      <div className='card-header'>
        <h3 className='card-title text-center'>Login Form</h3>
      </div>
      <div className='card-body'>
        <form onSubmit={handleLogin}>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username or Email</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button
            className='btn btn-primary w-100 py-2'
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
      <p className='text-center'>
        Don't have an account? <Link to='/register'>Register</Link> here
      </p>
    </div>
  );
};

export default Login;
