import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { registerUser } from '../services/AuthService';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const navigator = useNavigate();

  function handleRegistration(e) {
    e.preventDefault();
    const user = { name, username, email, password };
    registerUser(user)
      .then(() => navigator('/login'))
      .catch((error) => console.error(error));
  }

  return (
    <div className='card w-50 mx-auto my-3'>
      <div className='card-header'>
        <h3 className='card-title text-center'>Registration Form</h3>
      </div>
      <div className='card-body'>
        <form onSubmit={handleRegistration}>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Full Name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Full Name</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='email'
              className='form-control'
              placeholder='name@example.com'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email address</label>
          </div>
          <div className='row'>
            <div className='col'>
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
            </div>
            <div className='col'>
              <div className='form-floating mb-3'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Re-enter Password'
                  name='rePassword'
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <label>Re-enter Password</label>
              </div>
            </div>
          </div>
          <button
            className='btn btn-primary w-100 py-2'
            type='submit'
          >
            Register
          </button>
        </form>
      </div>
      <p className='text-center'>
        Alrady have an account? <Link to='/login'>Log in</Link> here
      </p>
    </div>
  );
};

export default Register;
