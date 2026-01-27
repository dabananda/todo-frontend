import { NavLink, useNavigate } from 'react-router-dom';
import { isUserLoggedIn, logout } from '../services/AuthService';

const Header = () => {
  const isLoggedIn = isUserLoggedIn();

  const navigator = useNavigate();

  function handleLogout() {
    logout();
    navigator('/login');
  }

  return (
    <nav
      className='navbar bg-dark navbar-expand-lg bg-body-dark'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        <a
          className='navbar-brand'
          href='/'
        >
          Todo App
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/'
              >
                Home
              </NavLink>
            </li>
            {isLoggedIn && (
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/todos'
                >
                  Todos
                </NavLink>
              </li>
            )}
          </ul>
          {isLoggedIn && (
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/login'
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          )}
          {!isLoggedIn && (
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/register'
                >
                  Register
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/login'
                >
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
