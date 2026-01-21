import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/todos"
            element={<Homepage />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
