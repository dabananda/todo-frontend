import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';
import Register from './components/Register';
import Login from './components/Login';
import { isUserLoggedIn } from './services/AuthService';

function AuthenticatedRoute({ children }) {
  const isAuth = isUserLoggedIn();
  if (isAuth) return children;
  return <Navigate to='/login' />;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={<Homepage />}
          />
          <Route
            path='/todos'
            element={
              <AuthenticatedRoute>
                <Homepage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='/add-todo'
            element={
              <AuthenticatedRoute>
                <Todo />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='/edit-todo/:id'
            element={
              <AuthenticatedRoute>
                <Todo />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
